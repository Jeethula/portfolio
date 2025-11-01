import { resources } from "@/lib/data";
import { NavMenu } from "@/components/nav-menu";
import { ResourceCard } from "@/components/resource-card";

export default function GDGPage() {
  const regularResources = resources.filter((resource) => !resource.additional);
  const additionalResources = resources.filter((resource) => resource.additional);

  return (
    <main className="bg-background min-h-screen text-foreground">
      <NavMenu />
      <section className="pt-20 py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="font-bold text-4xl sm:text-5xl mb-4">
              GDG Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I hope the session is good! Here are some amazing resources to help you get started.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-semibold text-2xl mb-8">Resources</h2>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {regularResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </div>

          {additionalResources.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="font-semibold text-2xl mb-8">Additional Resources</h2>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {additionalResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

