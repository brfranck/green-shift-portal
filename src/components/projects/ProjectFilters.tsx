import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
          <Select value={selectedType || ""} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Tous</SelectItem>
              {projectTypes.map(type => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="font-medium mb-2">Localisation</h3>
          <Select value={selectedLocation || ""} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Toutes les localisations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Toutes</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          <Select value={selectedYear || ""} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Toutes les années" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Toutes</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};