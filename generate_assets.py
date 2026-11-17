# generate_assets.py
import os

# 1. Standalone Icon (Square App Icon / Favicon / Monogram)
# ViewBox 0 0 32 32
pk_icon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <defs>
    <style>
      .pk-bg { fill: #181817; }
      .pk-border { stroke: #33312E; stroke-width: 1.5; }
      .pk-stem { stroke: #EDECE8; stroke-width: 2.2; stroke-linecap: round; }
      .pk-p { stroke: #EDECE8; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
      .pk-k { stroke: #C8462B; stroke-width: 2.2; stroke-linecap: round; }
      .pk-dot { fill: #C8462B; }
      @media (prefers-color-scheme: light) {
        .pk-bg { fill: #F9F8F6; }
        .pk-border { stroke: #D8D4CA; }
        .pk-stem { stroke: #181817; }
        .pk-p { stroke: #181817; }
        .pk-k { stroke: #C8462B; }
        .pk-dot { fill: #C8462B; }
      }
    </style>
  </defs>
  <!-- Background Badge -->
  <rect x="1.5" y="1.5" width="29" height="29" rx="5" class="pk-bg pk-border"/>
  
  <!-- Shared Left Spine of P & K -->
  <path d="M8.5 6.5V25.5" class="pk-stem"/>
  
  <!-- P Arch (Archival Bowl) -->
  <path d="M8.5 6.5H16.5C19.5376 6.5 22 8.96243 22 12C22 15.0376 19.5376 17.5 16.5 17.5H8.5" class="pk-p"/>
  
  <!-- K Diagonals (Knowledge Vertex in Vermilion) -->
  <path d="M15 17.5L23.5 7.5" class="pk-k"/>
  <path d="M15 17.5L23.5 25.5" class="pk-k"/>
  
  <!-- Archival Vertex Node -->
  <circle cx="15" cy="17.5" r="1.6" class="pk-dot"/>
</svg>'''

# 2. Favicon SVG (High Contrast, tight crop, pure vector)
favicon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#181817"/>
  <path d="M8.5 6.5V25.5" stroke="#EDECE8" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M8.5 6.5H16.5C19.5 6.5 22 8.9 22 12C22 15.1 19.5 17.5 16.5 17.5H8.5" stroke="#EDECE8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 17.5L23.5 7.5" stroke="#C8462B" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M15 17.5L23.5 25.5" stroke="#C8462B" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="15" cy="17.5" r="1.8" fill="#C8462B"/>
</svg>'''

# 3. Horizontal Full Lockup (Dark Theme)
# ViewBox 0 0 280 64
pk_logo_dark_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 64" fill="none">
  <!-- Monogram Mark -->
  <g transform="translate(10, 10)">
    <rect x="0.5" y="0.5" width="43" height="43" rx="8" fill="#181817" stroke="#33312E" stroke-width="1.5"/>
    <path d="M12 9V35" stroke="#EDECE8" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 9H23C27.1421 9 30.5 12.3579 30.5 16.5C30.5 20.6421 27.1421 24 23 24H12" stroke="#EDECE8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 24L32.5 10.5" stroke="#C8462B" stroke-width="3" stroke-linecap="round"/>
    <path d="M21 24L32.5 35" stroke="#C8462B" stroke-width="3" stroke-linecap="round"/>
    <circle cx="21" cy="24" r="2.2" fill="#C8462B"/>
  </g>
  
  <!-- Wordmark: PK NOTE -->
  <text x="68" y="34" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="700" letter-spacing="-0.03em" fill="#EDECE8">PK NOTE</text>
  
  <!-- Subtitle Tagline: ARCHIVAL KNOWLEDGE &amp; BLOCK WORKSPACE -->
  <text x="68" y="48" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="500" letter-spacing="0.12em" fill="#96948E">ARCHIVAL KNOWLEDGE &amp; BLOCK WORKSPACE</text>
  
  <!-- Version Tag -->
  <rect x="178" y="20" width="34" height="15" rx="3" fill="#22211F" stroke="#33312E" stroke-width="1"/>
  <text x="184" y="31" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#C8462B">v2.5</text>
</svg>'''

# 4. Horizontal Full Lockup (Light Theme)
pk_logo_light_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 64" fill="none">
  <!-- Monogram Mark -->
  <g transform="translate(10, 10)">
    <rect x="0.5" y="0.5" width="43" height="43" rx="8" fill="#F9F8F6" stroke="#D8D4CA" stroke-width="1.5"/>
    <path d="M12 9V35" stroke="#181817" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 9H23C27.1421 9 30.5 12.3579 30.5 16.5C30.5 20.6421 27.1421 24 23 24H12" stroke="#181817" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 24L32.5 10.5" stroke="#C8462B" stroke-width="3" stroke-linecap="round"/>
    <path d="M21 24L32.5 35" stroke="#C8462B" stroke-width="3" stroke-linecap="round"/>
    <circle cx="21" cy="24" r="2.2" fill="#C8462B"/>
  </g>
  
  <!-- Wordmark: PK NOTE -->
  <text x="68" y="34" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="700" letter-spacing="-0.03em" fill="#181817">PK NOTE</text>
  
  <!-- Subtitle Tagline: ARCHIVAL KNOWLEDGE &amp; BLOCK WORKSPACE -->
  <text x="68" y="48" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="500" letter-spacing="0.12em" fill="#6E6D68">ARCHIVAL KNOWLEDGE &amp; BLOCK WORKSPACE</text>
  
  <!-- Version Tag -->
  <rect x="178" y="20" width="34" height="15" rx="3" fill="#EAE7E1" stroke="#D8D4CA" stroke-width="1"/>
  <text x="184" y="31" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" fill="#C8462B">v2.5</text>
</svg>'''

# 5. Universal Adaptive SVG Logo
pk_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 64" fill="none">
  <defs>
    <style>
      .logo-bg { fill: #181817; }
      .logo-border { stroke: #33312E; stroke-width: 1.5; }
      .logo-stem { stroke: #EDECE8; stroke-width: 3; stroke-linecap: round; }
      .logo-p { stroke: #EDECE8; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
      .logo-k { stroke: #C8462B; stroke-width: 3; stroke-linecap: round; }
      .logo-dot { fill: #C8462B; }
      .logo-text-title { fill: #EDECE8; }
      .logo-text-sub { fill: #96948E; }
      .logo-badge-bg { fill: #22211F; stroke: #33312E; }
      .logo-badge-text { fill: #C8462B; }
      @media (prefers-color-scheme: light) {
        .logo-bg { fill: #F9F8F6; }
        .logo-border { stroke: #D8D4CA; }
        .logo-stem { stroke: #181817; }
        .logo-p { stroke: #181817; }
        .logo-k { stroke: #C8462B; }
        .logo-dot { fill: #C8462B; }
        .logo-text-title { fill: #181817; }
        .logo-text-sub { fill: #6E6D68; }
        .logo-badge-bg { fill: #EAE7E1; stroke: #D8D4CA; }
        .logo-badge-text { fill: #C8462B; }
      }
    </style>
  </defs>
  <!-- Monogram Mark -->
  <g transform="translate(10, 10)">
    <rect x="0.5" y="0.5" width="43" height="43" rx="8" class="logo-bg logo-border"/>
    <path d="M12 9V35" class="logo-stem"/>
    <path d="M12 9H23C27.1421 9 30.5 12.3579 30.5 16.5C30.5 20.6421 27.1421 24 23 24H12" class="logo-p"/>
    <path d="M21 24L32.5 10.5" class="logo-k"/>
    <path d="M21 24L32.5 35" class="logo-k"/>
    <circle cx="21" cy="24" r="2.2" class="logo-dot"/>
  </g>
  <text x="68" y="34" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="22" font-weight="700" letter-spacing="-0.03em" class="logo-text-title">PK NOTE</text>
  <text x="68" y="48" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="500" letter-spacing="0.12em" class="logo-text-sub">ARCHIVAL KNOWLEDGE &amp; BLOCK WORKSPACE</text>
  <rect x="178" y="20" width="34" height="15" rx="3" stroke-width="1" class="logo-badge-bg"/>
  <text x="184" y="31" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="500" class="logo-badge-text">v2.5</text>
</svg>'''

with open('pk-note-icon.svg', 'w', encoding='utf-8') as f:
    f.write(pk_icon_svg)

with open('favicon.svg', 'w', encoding='utf-8') as f:
    f.write(favicon_svg)

with open('pk-note-logo.svg', 'w', encoding='utf-8') as f:
    f.write(pk_logo_svg)

with open('pk-note-logo-dark.svg', 'w', encoding='utf-8') as f:
    f.write(pk_logo_dark_svg)

with open('pk-note-logo-light.svg', 'w', encoding='utf-8') as f:
    f.write(pk_logo_light_svg)

print("Generated all logo and icon assets.")
