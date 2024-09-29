import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ClassCardProps {
  name: string;
  color: string;
}

export default function ClassCard(props: ClassCardProps) {
  return (
    <Card className="min-w-64">
      <CardHeader>
        <CardTitle>
          <h3 className="uppercase scroll-m-20 text-xl font-semibold tracking-tight">
            Mage
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <a className="capitalize flex items-center text-sm mb-1">
            <img
              className="rounded-full mr-2 h-5 w-5"
              src="https://mythicstats.com/img/spec/arcane-mage.jpg"
            />
            Arcane
          </a>
          <a className="capitalize flex items-center text-sm mb-1">
            <img
              className="rounded-full mr-2 h-5 w-5"
              src="https://mythicstats.com/img/spec/frost-mage.jpg"
            />
            Frost
          </a>
          <a className="capitalize flex items-center text-sm mb-1">
            <img
              className="rounded-full mr-2 h-5 w-5"
              src="https://mythicstats.com/img/spec/fire-mage.jpg"
            />
            Fire
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
