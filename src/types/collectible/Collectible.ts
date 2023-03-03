/**
 * Represents a collectible in Grams.
 */
export interface Collectible {
    /**
     * The ID of the collectible.
     */
    id: string;
    
    /**
     * The name of the collectible.
     */
    name: string;
    
    /**
     * The description of the collectible.
     */
    description: string;
    
    /**
     * The image URL of the collectible.
     */
    image: string;
    
    /**
     * The current owner of the collectible.
     */
    owner: string;
    
    /**
     * The previous owners of the collectible.
     */
    previousOwners: string[];
    
    /**
     * The date the collectible was created.
     */
    createdAt: Date;
}
