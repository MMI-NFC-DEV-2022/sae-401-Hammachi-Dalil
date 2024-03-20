export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      celebrite: {
        Row: {
          age: number | null
          id_celebrite: number
          image: string | null
          nb_films: number | null
          nom: string | null
          prenom: string | null
        }
        Insert: {
          age?: number | null
          id_celebrite: number
          image?: string | null
          nb_films?: number | null
          nom?: string | null
          prenom?: string | null
        }
        Update: {
          age?: number | null
          id_celebrite?: number
          image?: string | null
          nb_films?: number | null
          nom?: string | null
          prenom?: string | null
        }
        Relationships: []
      }
      filmacteur: {
        Row: {
          acteur: number
          film: number
        }
        Insert: {
          acteur: number
          film: number
        }
        Update: {
          acteur?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_filmacteur_acteur_fkey"
            columns: ["acteur"]
            isOneToOne: false
            referencedRelation: "celebrite"
            referencedColumns: ["id_celebrite"]
          },
          {
            foreignKeyName: "public_filmacteur_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id_film"]
          },
        ]
      }
      filmgenre: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_filmgenre_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id_film"]
          },
          {
            foreignKeyName: "public_filmgenre_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "genre"
            referencedColumns: ["id_genre"]
          },
        ]
      }
      films: {
        Row: {
          affiche: string | null
          bande_annonce: string | null
          date_de_sortie: string | null
          id_film: number
          synopsis: string | null
          titre: string | null
        }
        Insert: {
          affiche?: string | null
          bande_annonce?: string | null
          date_de_sortie?: string | null
          id_film: number
          synopsis?: string | null
          titre?: string | null
        }
        Update: {
          affiche?: string | null
          bande_annonce?: string | null
          date_de_sortie?: string | null
          id_film?: number
          synopsis?: string | null
          titre?: string | null
        }
        Relationships: []
      }
      filmsaga: {
        Row: {
          film: number
          saga: number
        }
        Insert: {
          film: number
          saga: number
        }
        Update: {
          film?: number
          saga?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_filmsaga_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id_film"]
          },
          {
            foreignKeyName: "public_filmsaga_saga_fkey"
            columns: ["saga"]
            isOneToOne: false
            referencedRelation: "saga"
            referencedColumns: ["id_saga"]
          },
        ]
      }
      genre: {
        Row: {
          id_genre: number
          libelle: string | null
        }
        Insert: {
          id_genre: number
          libelle?: string | null
        }
        Update: {
          id_genre?: number
          libelle?: string | null
        }
        Relationships: []
      }
      plateforme: {
        Row: {
          id_support: number
          libelle: string | null
        }
        Insert: {
          id_support: number
          libelle?: string | null
        }
        Update: {
          id_support?: number
          libelle?: string | null
        }
        Relationships: []
      }
      saga: {
        Row: {
          id_saga: number
          libelle: string | null
          nb_films: number | null
        }
        Insert: {
          id_saga: number
          libelle?: string | null
          nb_films?: number | null
        }
        Update: {
          id_saga?: number
          libelle?: string | null
          nb_films?: number | null
        }
        Relationships: []
      }
      support_physique: {
        Row: {
          id_film: number | null
          id_support_physique: number
          libelle: string | null
          prix: number | null
        }
        Insert: {
          id_film?: number | null
          id_support_physique: number
          libelle?: string | null
          prix?: number | null
        }
        Update: {
          id_film?: number | null
          id_support_physique?: number
          libelle?: string | null
          prix?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "support_physique_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id_film"]
          },
        ]
      }
      variant: {
        Row: {
          description: string | null
          duree: string | null
          id_variant: string
          type: string | null
        }
        Insert: {
          description?: string | null
          duree?: string | null
          id_variant: string
          type?: string | null
        }
        Update: {
          description?: string | null
          duree?: string | null
          id_variant?: string
          type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
