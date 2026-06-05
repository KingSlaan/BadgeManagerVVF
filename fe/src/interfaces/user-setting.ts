// app/models/user-settings.ts

export interface UserSettings {
  username: string;
  email: string;
  imageUrl?: string;
}

export interface UpdateUserSettingsRequest {
  username: string;
  email: string;
  image?: File | null;
}
