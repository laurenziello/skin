/**
 * Dati del tema
 */
export interface DocsSiteTheme {
    /**
     * Link al css
     */
    href: string;
    /**
     * Nome tema
     */
    accent: string;
    /**
     * Colore primario
     */
    primary: string;
    /**
     * Tema default
     */
    isDefault?: boolean;
  }
