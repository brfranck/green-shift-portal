import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Calculator = () => {
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateImpact = () => {
    const value = parseFloat(consumption);
    if (!isNaN(value)) {
      // Exemple de calcul simple - à adapter selon vos besoins
      const impact = value * 0.5; // 0.5 kg CO2 par kWh
      setResult(impact);
      console.log("Impact calculated:", impact);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculateur d'Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Consommation énergétique (kWh/an)
            </label>
            <Input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="Entrez votre consommation"
            />
          </div>
          <Button onClick={calculateImpact} className="w-full">
            Calculer l'impact
          </Button>
          {result !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-primary/10 rounded-lg"
            >
              <p className="text-center">
                Impact estimé: {result.toFixed(2)} kg CO2/an
              </p>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};