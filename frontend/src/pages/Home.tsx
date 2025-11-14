import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const mockWeather = {
  location: "Paraná",
  summary: "Chuva nos próximos 3 dias",
  tempMin: 18,
  tempMax: 27,
};

const mockPrices = [
  { name: "Soja", change: "+1,5%", status: "alta" },
  { name: "Milho", change: "0,0%", status: "estável" },
  { name: "Boi gordo", change: "-0,8%", status: "baixa" },
];

const mockNews = [
  {
    title: "Anvisa aprova novo defensivo",
    source: "Canal Rural",
    time: "há 2h",
  },
  {
    title: "Safra de soja no MT deve bater recorde",
    source: "Globo Rural",
    time: "há 5h",
  },
];

const mockSummary =
  "Hoje a soja teve leve alta impulsionada por demanda externa. A previsão de chuva favorece o desenvolvimento da safra no PR. Não há alertas fitossanitários relevantes para hoje.";

export function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">
        Visão geral do dia
      </h1>

      {/* Linha 1: Clima + Preços */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Clima</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Região: <span className="font-medium">{mockWeather.location}</span>
            </p>
            <p className="mt-2">{mockWeather.summary}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Temperatura: {mockWeather.tempMin}°C – {mockWeather.tempMax}°C
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preços hoje</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockPrices.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between text-sm"
              >
                <span>{p.name}</span>
                <span
                  className={
                    p.status === "alta"
                      ? "text-emerald-500"
                      : p.status === "baixa"
                      ? "text-red-500"
                      : "text-zinc-400"
                  }
                >
                  {p.change}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Linha 2: Notícias + Resumo IA */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Notícias do agro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockNews.map((n) => (
              <div key={n.title} className="space-y-1">
                <p className="text-sm font-medium leading-snug">{n.title}</p>
                <p className="text-xs text-muted-foreground">
                  {n.source} • {n.time}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle>Resumo do dia (IA)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{mockSummary}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}