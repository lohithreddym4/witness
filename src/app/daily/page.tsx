import {
    dailyBattlefields,
  } from "@/content/battlefield/daily";
  
  export default function DailyPage() {
    const index =
      new Date().getDate() %
      dailyBattlefields.length;
  
    const challenge =
      dailyBattlefields[index];
  
    return (
      <main className="min-h-screen flex items-center justify-center">
  
        <div className="text-center">
  
          <h1 className="text-5xl">
            Today's Battlefield
          </h1>
  
          <p className="mt-8">
            {challenge}
          </p>
  
        </div>
  
      </main>
    );
  }