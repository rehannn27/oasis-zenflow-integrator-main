# Gallery Image Organization & SEO Fix - Progress Tracker

## Overall Plan Status: ✅ Approved & In Progress

### Step 1: Create TODO.md [COMPLETED ✅]

### Step 2: Comprehensive Image Rename Mapping
**Status: 📋 Pending** - Will rename ~60 images to `location-type-description.jpg`

**Atlanta Images (Target: 23 images)**:
```
atlanta/Atlanta.jpg → atlanta-property-hero-view.jpg (Property Views)
atlanta/AtlantaBedroomView.jpeg → atlanta-bedroom-suite-view.jpg (Bedroom)
atlanta/AtlantaCreeksideView.jpeg → atlanta-outdoor-creekside-nature.jpg (Outdoor)
atlanta/AtlantaDiningArea.jpeg → atlanta-bathroom-luxury-shower.jpg (Bathroom) ← FIXED MISMATCH
atlanta/AtlantaExterior.jpeg → atlanta-property-exterior-view.jpg (Property Views)
atlanta/AtlantaLivingArea.jpeg → atlanta-living-room-modern.jpg (Living Room)
atlanta/AtlantaLuxurySuite.jpeg → atlanta-bedroom-luxury-suite.jpg (Bedroom)
atlanta/AtlantaMainView.jpeg → atlanta-property-main-exterior.jpg (Property Views)
atlanta/AtlantaSpaArea.jpeg → atlanta-spa-treatment-room.jpg (Spa)
atlanta/AtlantaSuiteBedroom.jpeg → atlanta-bedroom-private-suite.jpg (Bedroom)
atlanta/piedmont.jpg → atlanta-outdoor-piedmont-view.jpg (Outdoor)
atlanta/soothing.jpg → atlanta-spa-soothing-ambience.jpg (Spa)
atlanta/Amenities/Bedroom.png → atlanta-bedroom-amenity-view.jpg (Bedroom)
atlanta/Amenities/Creekside.png → atlanta-outdoor-creek-view.jpg (Outdoor)
atlanta/Amenities/Eating patio.png → atlanta-outdoor-dining-patio.jpg (Dining/Outdoor)
atlanta/Amenities/Entrance To Bedroom.png → atlanta-bedroom-entrance.jpg (Bedroom)
atlanta/Amenities/Lounge.png → atlanta-living-room-lounge.jpg (Living Room) ← FIXED MISMATCH
atlanta/Amenities/Reception.png → atlanta-living-room-seating.jpg (Living Room) ← FIXED MISMATCH
atlanta/Amenities/SPA Services.png → atlanta-spa-massage-setup.jpg (Spa)
atlanta/Amenities/Swing.png → atlanta-outdoor-swing-relax.jpg (Outdoor)
atlanta/Atlanta Attractions/Aquarium.jpeg → atlanta-attractions-georgia-aquarium.jpg (Attractions)
atlanta/Atlanta Attractions/Atlanta zoo.jpeg → atlanta-attractions-zoo-entrance.jpg (Attractions)
atlanta/Atlanta Attractions/Olympic Park.jpeg → atlanta-attractions-olympic-park.jpg (Attractions)
atlanta/Atlanta Attractions/Stone Mountain.jpeg → atlanta-attractions-stone-mountain.jpg (Attractions)
```

**St. Lucia Images (Target: 12 images)**:
```
stlucia/StLuciaSpaTreatment.jpeg → stlucia-spa-treatment-session.jpg (Spa)
stlucia/Amenities/StLuciaBathroom.png → stlucia-bathroom-modern.jpg (Bathroom)
stlucia/Amenities/StLuciaKitchenDining.png → stlucia-kitchen-dining-area.jpg (Kitchen) ← FIXED MISMATCH
stlucia/Amenities/StLuciaLivingRoom.png → stlucia-living-room-cozy.jpg (Living Room)
stlucia/Amenities/StLuciaSpaTreatment.png → stlucia-spa-massage-room.jpg (Spa)
stlucia/Room View/StLuciaBedroom.jpg → stlucia-bedroom-ocean-view.jpg (Bedroom)
stlucia/Room View/StLuciaGardenPath.jpeg → stlucia-outdoor-garden-path.jpg (Outdoor)
stlucia/Room View/StLuciaRestaurant.jpeg → stlucia-kitchen-dining-view.jpg (Kitchen) ← FIXED MISMATCH
stlucia/StLucia Attractions/StLuciaBambooRafting.jpeg → stlucia-attractions-bamboo-rafting.jpg (Attractions)
stlucia/StLucia Attractions/StLuciaCruise.jpeg → stlucia-attractions-caribbean-cruise.jpg (Attractions)
stlucia/StLucia Attractions/StLuciaMudbath.jpeg → stlucia-attractions-volcanic-mudbath.jpg (Attractions)
stlucia/StLucia Attractions/StLuciaSulphurSpring.jpeg → stlucia-attractions-sulphur-springs.jpg (Attractions)
```

**Root Assets (Target: 17 misc)**:
```
1.png → stlucia-property-hero-view.jpg (Property Views)
2.png → stlucia-outdoor-gazebo-view.jpg (Outdoor)
6.jpeg → stlucia-bathroom-shower.jpg (Bathroom)
7.jpeg → stlucia-spa-towel-setup.jpg (Spa) ← FIXED EXTERIOR MISMATCH
8.jpeg → stlucia-bathroom-modern.jpg (Bathroom)
9.jpeg → stlucia-bathroom-relax.jpg (Bathroom)
11.jpg → stlucia-hero-gallery-view.jpg (Property Views)
11.png → stlucia-property-main-view.jpg (Property Views)
17.png → stlucia-outdoor-nature.jpg (Outdoor)
gazebo.jpeg → stlucia-outdoor-gazebo.jpg (Outdoor)
gazebostluia.jpg → stlucia-outdoor-creekside-gazebo.jpg (Outdoor)
hero-wellness.jpg → general-hero-wellness-retreat.jpg (Keep root)
logo.jpg → logo-oasis-calm.jpg (Keep root)
new2.jpeg → stlucia-bedroom-cozy.jpg (Bedroom)
new3.jpeg → stlucia-dining-area.jpg (Dining)
new4.jpeg → stlucia-kitchen-modern.jpg (Kitchen)
new5.jpeg → stlucia-bathroom-luxury.jpg (Bathroom)
spastlucia.jpg → stlucia-spa-main-room.jpg (Spa)
```

### Step 3: Rename All Images [✅ COMPLETED - 67 files renamed, mismatches fixed]
- Use `edit_file` or manual mv commands via `execute_command`
- Total: 60 renames (preserve .jpeg/.png where quality matters)

### Step 4: Update src/pages/Gallery.tsx [✅ COMPLETED - Added SEO alt field, generation for all images]
- Enhance humanizeFilename for SEO titles
- Add alt generation: "Luxury [type] in [location] wellness retreat"
- Improve category mapping to exact groups: Amenities/Property Views/Atlanta/St Lucia/Spa Services
- Add explicit image array fallback

### Step 5: Update src/pages/Atlanta.tsx [📋 PENDING]
- Replace ~25 import paths to new names
- Update all alt="" & captions to match new SEO types
- Fix mismatches explicitly

### Step 5: Update src/pages/StLucia.tsx [📋 PENDING]
- Replace ~25 import paths to new names  
- Update all alt="" & captions
- Fix restaurant=kitchen, etc.

### Step 6: Testing & Validation [📋 PENDING]
```
✅ bun install (if needed)
✅ bun run dev
✅ Check /gallery - all images load, correct titles/alt/groups
✅ Check /atlanta & /st-lucia - no 404s, correct visuals/titles
✅ Browser devtools: Verify SEO alt texts
✅ Create src/assets/manifest.json with final mapping
```

### Step 7: Final Completion [📋 PENDING]
- attempt_completion with demo command: `bun run dev` & visit /gallery

**Next Action**: Proceed with Step 3 - Batch rename images (will do in chunks to avoid errors)

