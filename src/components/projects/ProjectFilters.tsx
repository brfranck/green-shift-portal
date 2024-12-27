import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ProjectFiltersProps {
  projectTypes: string[];
  locations: string[];
  impactTypes: string[];
  years: string[];
  selectedType: string | null;
  selectedLocation: string | null;
  selectedImpacts: string[];
  selectedYear: string | null;
  setSelectedType: (type: string) => void;
  setSelectedLocation: (location: string) => void;
  handleImpactChange: (impact: string) => void;
  setSelectedYear: (year: string) => void;
}

export const ProjectFilters = ({
  projectTypes,
  locations,
  impactTypes,
  years,
  selectedType,
  selectedLocation,
  selectedImpacts,
  selectedYear,
  setSelectedType,
  setSelectedLocation,
  handleImpactChange,
  setSelectedYear,
}: ProjectFiltersProps) => {
  return (
    <div className="mb-8 p-6 bg-secondary/10 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filtres</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="font-medium mb-2">Type de projet</h3>
          <RadioGroup value={selectedType || ""} onValueChange={setSelectedType}>
            <div className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem value="" id="type-all" />
                <Label className="ml-2" htmlFor="type-all">Tous</Label>
              </div>
              {projectTypes.map(type => (
                <div key={type} className="flex items-center">
                  <RadioGroupItem value={type} id={`type-${type}`} />
                  <Label className="ml-2" htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="font-medium mb-2">Localisation</h3>
          <RadioGroup value={selectedLocation || ""} onValueChange={setSelectedLocation}>
            <div className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem value="" id="location-all" />
                <Label className="ml-2" htmlFor="location-all">Toutes</Label>
              </div>
              {locations.map(location => (
                <div key={location} className="flex items-center">
                  <RadioGroupItem value={location} id={`location-${location}`} />
                  <Label className="ml-2" htmlFor={`location-${location}`}>{location}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="font-medium mb-2">Impact</h3>
          <div className="space-y-2">
            {impactTypes.map(impact => (
              <div key={impact} className="flex items-center">
                <Checkbox
                  id={`impact-${impact}`}
                  checked={selectedImpacts.includes(impact)}
                  onCheckedChange={() => handleImpactChange(impact)}
                />
                <Label className="ml-2" htmlFor={`impact-${impact}`}>{impact}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Année</h3>
          <RadioGroup value={selectedYear || ""} onValueChange={setSelectedYear}>
            <div className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem value="" id="year-all" />
                <Label className="ml-2" htmlFor="year-all">Toutes</Label>
              </div>
              {years.map(year => (
                <div key={year} className="flex items-center">
                  <RadioGroupItem value={year} id={`year-${year}`} />
                  <Label className="ml-2" htmlFor={`year-${year}`}>{year}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};