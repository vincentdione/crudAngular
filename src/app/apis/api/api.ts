export * from './categorie.service';
import { CategorieService } from './categorie.service';
export * from './produit.service';
import { ProduitService } from './produit.service';
export * from './utilisateur.service';
import { UtilisateurService } from './utilisateur.service';
export const APIS = [CategorieService, ProduitService, UtilisateurService];
