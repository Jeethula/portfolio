import { resources } from "@/lib/data";
import { NavMenu } from "@/components/nav-menu";
import { ResourceCard } from "@/components/resource-card";
import { Sparkles, BookOpen, Gift } from "lucide-react";

export default function GDGPage() {
  // Separate resources by priority and additional flag
  const priorityResources = resources.filter(
    (resource) => resource.priority && !resource.additional
  );
  const regularResources = resources.filter(
    (resource) => !resource.priority && !resource.additional
  );
  const priorityAdditional = resources.filter(
    (resource) => resource.priority && resource.additional
  );
  const additionalResources = resources.filter(
    (resource) => !resource.priority && resource.additional
  );

  return (
    <main className="bg-background min-h-screen text-foreground">
      <NavMenu />
      <section className="relative pt-20 py-16 overflow-hidden">
        
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I hope the session is good!{" "}
              <span className="font-semibold text-foreground">
                Here are some amazing resources
              </span>{" "}
              to help you get started on your development journey.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="px-2">✨ {resources.length} Free Resources</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* Priority Resources */}
          {priorityResources.length > 0 && (
            <div className="mb-16">
              <h2 className="font-semibold text-2xl mb-8">Featured Resources</h2>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {priorityResources.map((resource, index) => (
                  <ResourceCard key={`priority-${index}`} resource={resource} />
                ))}
              </div>
            </div>
          )}

          {/* Regular Resources */}
          {regularResources.length > 0 && (
            <div className="mb-16">
              <h2 className="font-semibold text-2xl mb-8">Resources</h2>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regularResources.map((resource, index) => (
                  <ResourceCard key={`regular-${index}`} resource={resource} />
                ))}
              </div>
            </div>
          )}

          {/* Additional Resources */}
          {(priorityAdditional.length > 0 || additionalResources.length > 0) && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="font-semibold text-2xl mb-8">Additional Resources</h2>
              
              {/* Priority Additional Resources */}
              {priorityAdditional.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-4 text-muted-foreground">Featured</h3>
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {priorityAdditional.map((resource, index) => (
                      <ResourceCard key={`priority-additional-${index}`} resource={resource} />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Additional Resources */}
              {additionalResources.length > 0 && (
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {additionalResources.map((resource, index) => (
                    <ResourceCard key={`additional-${index}`} resource={resource} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

