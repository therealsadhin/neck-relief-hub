import { useTheme } from "@/contexts/ThemeContext";
import { Check } from "lucide-react";

const colorVariants = [
  { id: 'blue' as const, name: 'Ocean Blue', color: 'hsl(210, 85%, 45%)', description: 'Calming ocean vibes' },
  { id: 'pink' as const, name: 'Pink', color: 'hsl(320, 70%, 50%)', description: 'Gentle rose therapy' }
];

export default function ColorVariantSelector() {
  const { colorVariant, setColorVariant } = useTheme();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choose Your Color</h3>
      <div className="grid grid-cols-2 gap-3">
        {colorVariants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => setColorVariant(variant.id)}
            className={`
              relative flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200
              ${colorVariant === variant.id 
                ? 'border-primary bg-primary/5 shadow-[var(--shadow-button)]' 
                : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }
            `}
          >
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: variant.color }}
            />
            <div className="flex-1 text-left">
              <div className="font-medium text-sm">{variant.name}</div>
              <div className="text-xs text-muted-foreground">{variant.description}</div>
            </div>
            {colorVariant === variant.id && (
              <Check className="w-5 h-5 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}