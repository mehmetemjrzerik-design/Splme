"use client";

import type { TabType, UserData } from "@/app/page";
import { PlayTab } from "@/components/tabs/play-tab";
import { ProfileTab } from "@/components/tabs/profile-tab";
import { StoreTab } from "@/components/tabs/store-tab";
import { SkinsTab } from "@/components/tabs/skins-tab";
import { LeaderboardTab } from "@/components/tabs/leaderboard-tab";

interface MainContentProps {
  activeTab: TabType;
  userData: UserData;
  onLogin: () => void;
  onLogout: () => void;
}

export function MainContent({
  activeTab,
  userData,
  onLogin,
  onLogout,
}: MainContentProps) {
  return (
    <div className="w-full max-w-5xl">
      {activeTab === "oyun" && <PlayTab />}
      {activeTab === "profil" && (
        <ProfileTab userData={userData} onLogin={onLogin} onLogout={onLogout} />
      )}
      {activeTab === "magaza" && <StoreTab userData={userData} />}
      {activeTab === "deriler" && <SkinsTab />}
      {activeTab === "siralama" && <LeaderboardTab />}
    </div>
  );
}
