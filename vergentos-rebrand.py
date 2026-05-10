#!/usr/bin/env python3
"""Vergentos rebrand — bulk find-replace. v2 (no whitespace mangling)."""
import os, re, sys
from pathlib import Path

ROOT = Path('/Users/duncanmaund/mediatopia-agency')
SRC = ROOT / 'src'
APPLY = '--apply' in sys.argv

ALREADY_DONE = {
    'src/utils/generateMetaData.ts',
    'src/app/layout.tsx',
    'src/components/home/Hero.tsx',
}

# IMPORTANT: only replace identity-specific strings. NO whitespace cleanup.
REPLACEMENTS = [
    # Phone
    (r'\+44\s*\(0\)\s*117\s*332\s*6021', '+44 (0) [PHONE-TO-CONFIRM]'),
    (r'\+441173326021', '+44 (0) [PHONE-TO-CONFIRM]'),
    (r'\+44\s*117\s*332\s*6021', '+44 (0) [PHONE-TO-CONFIRM]'),
    (r'0117\s*332\s*6021', '+44 (0) [PHONE-TO-CONFIRM]'),
    (r'01173326021', '+44 (0) [PHONE-TO-CONFIRM]'),
    
    # Address
    (r'12\s+Whiteladies\s+Road,?\s*Bristol,?\s*BS8\s*1PD', '[ADDRESS-REMOVED]'),
    (r'12\s+Whiteladies\s+Road', '[ADDRESS-REMOVED]'),
    (r'Whiteladies\s+Road', '[ADDRESS-REMOVED]'),
    (r'BS8\s*1PD', ''),
    
    # Founder — kill name everywhere
    (r'Duncan\s+Maund', ''),
    (r'duncanmaund', 'vergentos'),
    
    # Email
    (r'hello@mediatopia\.agency', 'hello@vergentos.com'),
    (r'hello@mediatopia\.co\.uk', 'hello@vergentos.com'),
    (r'@mediatopia\.agency', '@vergentos.com'),
    (r'@mediatopia\.co\.uk', '@vergentos.com'),
    
    # Social handles
    (r'instagram\.com/mediatopiauk/?', 'instagram.com/vergentos/'),
    (r'facebook\.com/mediatopiainternational/?', 'facebook.com/vergentos/'),
    (r'linkedin\.com/in/duncanmaund/?', 'linkedin.com/company/vergentos/'),
    (r'github\.com/mediatopiauk/?', 'github.com/vergentos/'),
    (r'x\.com/mediatweetia/?', 'x.com/vergentos/'),
    (r'twitter\.com/mediatweetia/?', 'twitter.com/vergentos/'),
    (r'clutch\.co/profile/mediatopia/?', 'clutch.co/profile/vergentos/'),
    
    # Domains
    (r'https://www\.mediatopia\.agency', 'https://www.vergentos.com'),
    (r'https://mediatopia\.agency', 'https://www.vergentos.com'),
    (r'www\.mediatopia\.agency', 'www.vergentos.com'),
    (r'mediatopia\.agency', 'vergentos.com'),
    
    # Brand name (longer phrases first)
    (r'Mediatopia\.agency', 'Vergentos'),
    (r'Mediatopia\s+Bristol', 'Vergentos'),
    (r'Mediatopia\s+Solutions\s+Ltd\.?', 'Vergentos'),
    (r'Mediatopia\s+UK', 'Vergentos'),
    (r'Mediatopia', 'Vergentos'),
    (r'mediatopia', 'vergentos'),
    (r'MEDIATOPIA', 'VERGENTOS'),
    
    # Geo phrases (longer first)
    (r"Bristol's\s+trusted\s+web\s+engineering\s+consultancy", 'a trusted SaaS development agency'),
    (r"Bristol's\s+trusted", 'a trusted'),
    (r"Bristol's\s+leading", 'a leading'),
    (r"Bristol's\s+premier", 'a premier'),
    (r"Bristol's\s+", ''),
    (r'Bristol\s+web\s+engineering\s+consultancy', 'SaaS development agency'),
    (r'Bristol\s+Web\s+Engineering\s+Consultancy', 'SaaS Development Agency'),
    (r'Bristol\s+SaaS\s+&\s+App\s+Development', 'SaaS & App Development'),
    (r'Bristol\s+SaaS\s+and\s+App\s+Development', 'SaaS and App Development'),
    (r'Bristol\s+&\s+Somerset\s+Case\s+Studies', 'Case Studies'),
    (r'Bristol\s+&\s+Somerset', ''),
    (r'Bristol,\s+Bath,?\s+and\s+Somerset', ''),
    (r'Bristol,\s+Bath\s+and\s+Somerset', ''),
    (r'Bristol,\s+Bath\s*&\s*Somerset', ''),
    (r'Bristol,\s+Bath\s*&\s*the\s+South\s+West', ''),
    (r'Bristol,?\s+Bath,?\s+and\s+the\s+South\s+West', ''),
    (r'across\s+Bristol,?\s+Bath,?\s+and\s+the\s+South\s+West', 'globally'),
    (r'Bristol,\s+Bath,?\s+or\s+anywhere\s+in\s+the\s+UK', 'globally'),
    (r'Bristol\s+haulage', 'logistics'),
    (r'Bristol\s+businesses', 'modern teams'),
    (r'ambitious\s+Bristol\s+businesses', 'ambitious teams'),
    (r'Bristol-based', 'remote-first'),
    
    # 22 years
    (r'22\s+Years\s+of\s+Web\s+Excellence\s*\|\s*Bristol\s*&\s*Somerset',
     'SaaS Development · AI · Dashboards'),
    (r'22\s+years\s+of\s+technical\s+excellence\s+serving\s+Bristol[^.]*\.',
     '22 years of technical excellence in modern web development.'),
    
    # Taunton
    (r'From\s+our\s+roots\s+in\s+Taunton\s+to\s+15\s+years\s+in\s+Bristol,?\s*', ''),
    (r'15\s+years\s+in\s+Bristol', ''),
    (r'Taunton', ''),
    
    # Bare geo (last)
    (r'\bin\s+Bristol\b', ''),
    (r'\bin\s+Bath\b', ''),
    (r'\bin\s+Somerset\b', ''),
    (r'\bnear\s+Bristol\b', ''),
    (r'\bacross\s+Bristol\b', 'globally'),
    (r'\bacross\s+Somerset\b', ''),
    (r'\bBristol\s+and\s+Bath\b', ''),
    (r'\bBath\s+and\s+Bristol\b', ''),
    (r'\bSouth\s+West\s+England\b', ''),
    (r'\bthe\s+South\s+West\b', ''),
    (r'\bBristol\b', ''),
    (r'\bSomerset\b', ''),
    
    # Geo meta tags
    (r'<meta\s+name="geo\.region"[^/>]*/?>', ''),
    (r'<meta\s+name="geo\.placename"[^/>]*/?>', ''),
    (r'<meta\s+name="geo\.position"[^/>]*/?>', ''),
    (r'<meta\s+name="ICBM"[^/>]*/?>', ''),
]

EXTENSIONS = {'.tsx', '.ts', '.jsx', '.js', '.json', '.html', '.md', '.mdx'}
SKIP_DIRS = {'node_modules', '.next', '.git', '.vercel', 'src.backup-before-vergentos-rebrand'}

def find_files():
    files = []
    for path in SRC.rglob('*'):
        if not path.is_file(): continue
        if path.suffix not in EXTENSIONS: continue
        if any(part in SKIP_DIRS for part in path.parts): continue
        if str(path.relative_to(ROOT)) in ALREADY_DONE: continue
        files.append(path)
    return sorted(files)

def process_file(path):
    try:
        original = path.read_text(encoding='utf-8')
    except (UnicodeDecodeError, OSError):
        return (False, None, None, 0)
    new = original
    change_count = 0
    for pattern, replacement in REPLACEMENTS:
        before = new
        new = re.sub(pattern, replacement, new, flags=re.MULTILINE)
        if new != before:
            change_count += len(re.findall(pattern, before, flags=re.MULTILINE))
    return (new != original, original, new, change_count)

def main():
    files = find_files()
    print(f"Scanning {len(files)} files...\n")
    changed_files = []
    total = 0
    for path in files:
        changed, _, new, count = process_file(path)
        if changed:
            rel = path.relative_to(ROOT)
            changed_files.append((rel, count))
            total += count
            if APPLY:
                path.write_text(new, encoding='utf-8')
    print(f"{'─' * 70}")
    print(f"Mode: {'APPLY (files written)' if APPLY else 'DRY RUN (no files changed)'}")
    print(f"Files affected: {len(changed_files)}")
    print(f"Total changes: {total}")
    print(f"{'─' * 70}\n")
    print("All affected files:")
    for rel, count in sorted(changed_files, key=lambda x: -x[1]):
        print(f"  [{count:3d}] {rel}")
    if not APPLY:
        print(f"\n→ Looks right? Re-run: python3 vergentos-rebrand.py --apply")
    else:
        print("\nSanity check — leftover identity strings:")
        any_remain = False
        for path in files:
            try: text = path.read_text(encoding='utf-8')
            except: continue
            for term in ['Mediatopia','mediatopia','Bristol','BS8','Whiteladies','Duncan Maund','0117 332','441173326021','Taunton','mediatopiauk','mediatweetia']:
                if term in text:
                    print(f"  REMAINS: '{term}' in {path.relative_to(ROOT)}")
                    any_remain = True
        if not any_remain:
            print("  None — clean!")

if __name__ == '__main__':
    main()
