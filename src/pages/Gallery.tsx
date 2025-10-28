import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabaseClient";

type GalleryImage = { src: string; title: string; category?: string };

function humanizeFilename(path: string): string {
  const filename = path.split("/").pop() || path;
  const name = filename.replace(/\.[^.]+$/, "");
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Local images fallback (auto-import everything in src/assets)
  const localImages = useMemo<GalleryImage[]>(() => {
    const modules = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,webp}", {
      eager: true,
      // use query/import to avoid deprecation warning
      query: "?url",
      import: "default",
    }) as Record<string, string>;

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, url]) => {
        const filename = path.toLowerCase();
        let category = "General";

        if (filename.includes("atlanta")) {
          category = "Atlanta";
        } else if (
          filename.includes("stlucia") ||
          filename.includes("st-lucia") ||
          filename.includes(" lucia") ||
          filename.includes("caribbean")
        ) {
          category = "St. Lucia";
        }

        const base = (path.split("/").pop() || "").toLowerCase();
        // Include all images in the gallery, no exclusions
        // const isNumbered = /^\d+\.(jpg|jpeg|png|webp)$/.test(base);
        // const looksLikeHouse = base.includes("house");
        // if (isNumbered || looksLikeHouse || category === "General") {
        //   return null as unknown as GalleryImage;
        // }

        return { src: url, title: humanizeFilename(path), category };
      })
      .filter(Boolean) as GalleryImage[];
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Prefer Supabase if configured, fallback to local assets
      if (isSupabaseConfigured()) {
        try {
          const supabase = getSupabaseClient();
          if (supabase) {
            const { data, error } = await supabase.storage
              .from("gallery")
              .list("", { limit: 100 });
            if (error) throw error;
            const withUrls: GalleryImage[] = (data || [])
              .filter((f) => f.name && !f.name.endsWith("/"))
              .map((f) => {
                const { data: urlData } = supabase.storage
                  .from("gallery")
                  .getPublicUrl(f.name);
                return { src: urlData.publicUrl, title: humanizeFilename(f.name) };
              });
            if (!cancelled) setImages(withUrls.length ? withUrls : localImages);
          } else {
            if (!cancelled) setImages(localImages);
          }
        } catch {
          if (!cancelled) setImages(localImages);
        } finally {
          if (!cancelled) setLoading(false);
        }
        return;
      }

      setImages(localImages);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [localImages]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Visual Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Spaces</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our tranquil Atlanta and St. Lucia locations
          </p>
        </div>

        {/* Gallery Grid - Organized by Location */}
        {["Atlanta", "St. Lucia"].map((location) => {
          const locationImages = images.filter(img => img.category === location);
          if (locationImages.length === 0) return null;

          return (
            <div key={location} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {location === "General" ? "General Gallery" : `${location} Location`}
              </h2>

              {location === "Atlanta" ? (
                // Special handling for Atlanta with subcategories
                <>
                  {/* Atlanta Attractions */}
                  {(() => {
                    const attractionsImages = locationImages.filter(img =>
                      img.title.toLowerCase().includes('aquarium') ||
                      img.title.toLowerCase().includes('zoo') ||
                      img.title.toLowerCase().includes('olympic') ||
                      img.title.toLowerCase().includes('stone mountain')
                    );
                    if (attractionsImages.length === 0) return null;
                    return (
                      <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Atlanta Attractions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {attractionsImages.map((img, index) => (
                            <Card
                              key={`${img.src}-${index}`}
                              className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
                            >
                              <div className="relative h-64 bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={img.src}
                                  alt={img.title}
                                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="text-base font-semibold">{img.title}</h3>
                                <span className="text-xs text-primary">Atlanta Attractions</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Atlanta Amenities */}
                  {(() => {
                    const amenitiesImages = locationImages.filter(img =>
                      img.title.toLowerCase().includes('bedroom') ||
                      img.title.toLowerCase().includes('creekside') ||
                      img.title.toLowerCase().includes('eating patio') ||
                      img.title.toLowerCase().includes('entrance') ||
                      img.title.toLowerCase().includes('lounge') ||
                      img.title.toLowerCase().includes('reception') ||
                      img.title.toLowerCase().includes('spa services') ||
                      img.title.toLowerCase().includes('swing')
                    );
                    if (amenitiesImages.length === 0) return null;
                    return (
                      <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Amenities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {amenitiesImages.map((img, index) => (
                            <Card
                              key={`${img.src}-${index}`}
                              className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
                            >
                              <div className="relative h-64 bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={img.src}
                                  alt={img.title}
                                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="text-base font-semibold">{img.title}</h3>
                                <span className="text-xs text-primary">Amenities</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Other Atlanta Images */}
                  {(() => {
                    const otherImages = locationImages.filter(img =>
                      !img.title.toLowerCase().includes('aquarium') &&
                      !img.title.toLowerCase().includes('zoo') &&
                      !img.title.toLowerCase().includes('olympic') &&
                      !img.title.toLowerCase().includes('stone mountain') &&
                      !img.title.toLowerCase().includes('bedroom') &&
                      !img.title.toLowerCase().includes('creekside') &&
                      !img.title.toLowerCase().includes('eating patio') &&
                      !img.title.toLowerCase().includes('entrance') &&
                      !img.title.toLowerCase().includes('lounge') &&
                      !img.title.toLowerCase().includes('reception') &&
                      !img.title.toLowerCase().includes('spa services') &&
                      !img.title.toLowerCase().includes('swing')
                    );
                    if (otherImages.length === 0) return null;
                    return (
                      <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Property Views</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {otherImages.map((img, index) => (
                            <Card
                              key={`${img.src}-${index}`}
                              className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
                            >
                              <div className="relative h-64 bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={img.src}
                                  alt={img.title}
                                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-4">
                                <h3 className="text-base font-semibold">{img.title}</h3>
                                <span className="text-xs text-primary">Property Views</span>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                // Default grid for other locations
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locationImages.map((img, index) => (
                    <Card
                      key={`${img.src}-${index}`}
                      className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
                    >
                      <div className="relative h-64 bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.title}
                          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-base font-semibold">{img.title}</h3>
                        <span className="text-xs text-primary">{img.category}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Empty/Loading States */}
        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">Loading images…</div>
        ) : images.length === 0 ? (
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-calm border-2 border-primary/20 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                No images found. Add files to `src/assets` or upload to the Supabase
                `gallery` bucket and make the bucket public.
              </p>
            </Card>
          </div>
        ) : null}
      </div>
    </div>
  );
}
