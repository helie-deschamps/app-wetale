import { ErrorOffline } from "../../errors/ErrorOffline"
import type { StoryBasic } from "../../types/StoryBasic"
import { TalesCategories } from "../../enums/TalesCategories"
import { ErrorApiNoResult } from "../../errors/ErrorApiNoResult"

const thrillerStoriesSampleData: StoryBasic[] = [
	{
		title: "L'Ombre du Passé",
		blurb: "Un détective tourmenté découvre un lien entre une série de meurtres actuels et une affaire non résolue de son passé.",
		type: TalesCategories.Thriller,
		uid: "ombre-passe",
		lastChapitre: 10,
		completionRatio: 55,
	},
	{
		title: "Dernier Appel",
		blurb: "Un homme reçoit un appel anonyme chaque nuit à minuit, lui annonçant un crime avant qu'il ne se produise.",
		type: TalesCategories.Thriller,
		uid: "dernier-appel",
		lastChapitre: 8,
		completionRatio: 65,
	},
	{
		title: "Le Photographe de Minuit",
		blurb: "Un photographe urbain réalise que ses clichés révèlent des détails invisibles à l'œil nu... y compris des scènes de crime futures.",
		type: TalesCategories.Thriller,
		uid: "photographe-minuit",
		lastChapitre: 9,
		completionRatio: 70,
	},
	{
		title: "Nuit Blanche à Lyon",
		blurb: "Une journaliste infiltre un cercle clandestin responsable de disparitions mystérieuses pendant la Nuit Blanche.",
		type: TalesCategories.Thriller,
		uid: "nuit-blanche",
		lastChapitre: 12,
		completionRatio: 90,
	},
	{
		title: "Chambre 404",
		blurb: "Un homme se réveille chaque jour dans une chambre d'hôtel différente, mais toujours avec des indices sur un meurtre non résolu.",
		type: TalesCategories.Thriller,
		uid: "chambre-404",
		lastChapitre: 11,
		completionRatio: 82,
	},
	{
		title: "La Liste Noire",
		blurb: "Un hacker découvre une liste de noms... tous décédés dans des circonstances étranges, sauf le sien.",
		type: TalesCategories.Thriller,
		uid: "liste-noire",
		lastChapitre: 7,
		completionRatio: 58,
	},
	{
		title: "Code Alpha",
		blurb: "Un agent secret en retraite doit reprendre du service quand une ancienne opération codée refait surface.",
		type: TalesCategories.Thriller,
		uid: "code-alpha",
		lastChapitre: 10,
		completionRatio: 77,
	},
	{
		title: "Derrière les Volets",
		blurb: "Dans un village reculé, des enfants disparaissent mystérieusement. Une nouvelle habitante décide d’enquêter.",
		type: TalesCategories.Thriller,
		uid: "volets",
		lastChapitre: 6,
		completionRatio: 48,
	},
	{
		title: "Clair-Obscur",
		blurb: "Un peintre aveugle depuis l’enfance retrouve mystérieusement la vue et commence à peindre des scènes de crimes non élucidés.",
		type: TalesCategories.Thriller,
		uid: "clair-obscur",
		lastChapitre: 9,
		completionRatio: 66,
	},
	{
		title: "Parfum Mortel",
		blurb: "Une parfumeuse de renom réalise que son dernier parfum provoque des hallucinations... ou des meurtres.",
		type: TalesCategories.Thriller,
		uid: "parfum-mortel",
		lastChapitre: 11,
		completionRatio: 83,
	},
	{
		title: "Terminal Zéro",
		blurb: "À l’aéroport, une valise sans propriétaire déclenche une série d'événements menaçant la sécurité nationale.",
		type: TalesCategories.Thriller,
		uid: "terminal-zero",
		lastChapitre: 12,
		completionRatio: 92,
	}
]
const romanceStoriesSampleData: StoryBasic[] = [
	{
		title: "Sous les étoiles de Paris",
		blurb: "Une artiste de rue et un chef étoilé tombent amoureux lors d’un concours culinaire insolite.",
		type: TalesCategories.Romance,
		uid: "etoiles-paris",
		lastChapitre: 8,
		completionRatio: 23,
	},
	{
		title: "Lettres à Juliette",
		blurb: "Une jeune femme découvre des lettres d'amour oubliées dans une maison de campagne italienne.",
		type: TalesCategories.Romance,
		uid: "lettres-juliette",
		lastChapitre: 10,
		completionRatio: 88,
	},
	{
		title: "Un tango à Buenos Aires",
		blurb: "Deux âmes opposées se rencontrent lors d’un festival de danse en Argentine.",
		type: TalesCategories.Romance,
		uid: "tango-aires",
		lastChapitre: 6,
		completionRatio: 51,
	},
	{
		title: "La Pluie de Kyoto",
		blurb: "Un photographe solitaire trouve l'amour auprès d’une calligraphe japonaise pendant la saison des pluies.",
		type: TalesCategories.Romance,
		uid: "pluie-kyoto",
		lastChapitre: 9,
		completionRatio: 69,
	},
	{
		title: "Cœurs à Contretemps",
		blurb: "Un pianiste et une violoniste se croisent à travers les années grâce à une partition magique.",
		type: TalesCategories.Romance,
		uid: "coeurs-contretemps",
		lastChapitre: 7,
		completionRatio: 56,
	},
	{
		title: "Rendez-vous au Phare",
		blurb: "Un écrivain retourne dans son village natal et tombe amoureux d'une gardienne de phare mystérieuse.",
		type: TalesCategories.Romance,
		uid: "rendezvous-phare",
		lastChapitre: 12,
		completionRatio: 92,
	},
	{
		title: "Le Dernier Métro",
		blurb: "Deux inconnus prennent toujours le même métro de minuit et apprennent à se connaître sans jamais échanger leurs noms.",
		type: TalesCategories.Romance,
		uid: "dernier-metro",
		lastChapitre: 8,
		completionRatio: 73,
	},
	{
		title: "À Travers les Vignes",
		blurb: "Une sommelière parisienne hérite d’un vignoble en ruine... et d’un charmant vigneron bourru.",
		type: TalesCategories.Romance,
		uid: "vignes",
		lastChapitre: 10,
		completionRatio: 80,
	},
	{
		title: "Écho d’Automne",
		blurb: "Une lettre trouvée dans un vieux livre pousse une libraire à chercher son mystérieux auteur.",
		type: TalesCategories.Romance,
		uid: "echo-automne",
		lastChapitre: 9,
		completionRatio: 68,
	},
	{
		title: "Un Café à Istanbul",
		blurb: "Un barista rêveur et une voyageuse française échangent des histoires autour d’un café aux épices étranges.",
		type: TalesCategories.Romance,
		uid: "cafe-istanbul",
		lastChapitre: 6,
		completionRatio: 48,
	},
	{
		title: "L’Horizon en Rose",
		blurb: "Deux photographes rivaux sont forcés de travailler ensemble sur une exposition romantique en Provence.",
		type: TalesCategories.Romance,
		uid: "horizon-rose",
		lastChapitre: 11,
		completionRatio: 85,
	}
]
const detectiveStoriesSampleData: StoryBasic[] = [
	{
		title: "Le Parfum du Mensonge",
		blurb: "Un détective découvre qu'une série de meurtres est liée à un parfum rare vendu uniquement à l'étranger.",
		type: TalesCategories.Detective,
		uid: "parfum-mensonge",
		lastChapitre: 9,
		completionRatio: 81,
	},
	{
		title: "Les Fantômes du Métro",
		blurb: "Des disparitions mystérieuses dans le métro parisien poussent un inspecteur à explorer un réseau de tunnels oublié.",
		type: TalesCategories.Detective,
		uid: "fantomes-metro",
		lastChapitre: 10,
		completionRatio: 74,
	},
	{
		title: "Code Omega",
		blurb: "Un cryptologue est retrouvé mort, laissant derrière lui une série d'indices chiffrés pour découvrir son meurtrier.",
		type: TalesCategories.Detective,
		uid: "code-omega",
		lastChapitre: 12,
		completionRatio: 91,
	},
	{
		title: "L'Inconnu de la Gare",
		blurb: "Une valise abandonnée contient un puzzle menant à une vérité bien plus sombre qu’un simple oubli.",
		type: TalesCategories.Detective,
		uid: "inconnu-gare",
		lastChapitre: 7,
		completionRatio: 59,
	},
	{
		title: "Réseau Obscur",
		blurb: "Un ancien agent d’Interpol découvre un réseau criminel opérant via le dark web.",
		type: TalesCategories.Detective,
		uid: "reseau-obscur",
		lastChapitre: 11,
		completionRatio: 88,
	},
	{
		title: "Minuit au Cimetière",
		blurb: "Un corps est retrouvé sur une tombe, mais ni le défunt ni le vivant ne sont ceux qu’ils semblent être.",
		type: TalesCategories.Detective,
		uid: "minuit-cimetiere",
		lastChapitre: 8,
		completionRatio: 63,
	},
	{
		title: "La Dernière Enigme",
		blurb: "Un détective à la retraite reçoit une lettre contenant une énigme menant à son propre passé oublié.",
		type: TalesCategories.Detective,
		uid: "derniere-enigme",
		lastChapitre: 10,
		completionRatio: 79,
	},
	{
		title: "Coupable Silence",
		blurb: "Dans une école privée, un professeur est accusé de meurtre, mais tout le monde refuse de témoigner.",
		type: TalesCategories.Detective,
		uid: "coupable-silence",
		lastChapitre: 6,
		completionRatio: 52,
	},
	{
		title: "L’Énigme du Carnaval",
		blurb: "Sous les masques et les confettis, un meurtre a été commis. Mais personne ne sait qui était qui.",
		type: TalesCategories.Detective,
		uid: "enigme-carnaval",
		lastChapitre: 12,
		completionRatio: 93,
	},
	{
		title: "Le Manuscrit Égaré",
		blurb: "Un écrivain célèbre est retrouvé mort, son dernier manuscrit manquant. Le détective doit le retrouver avant qu’il ne soit publié à tort.",
		type: TalesCategories.Detective,
		uid: "manuscrit-egare",
		lastChapitre: 9,
		completionRatio: 68,
	},
	{
		title: "Dernier Regard",
		blurb: "Une caméra de surveillance capture un crime, mais l’enregistrement est corrompu. Le détective doit tout reconstruire à partir d’une fraction d’image.",
		type: TalesCategories.Detective,
		uid: "dernier-regard",
		lastChapitre: 11,
		completionRatio: 84,
	}
];
const scienceFictionStoriesSampleData: StoryBasic[] = [
	{
		title: "Chronosphère",
		blurb: "Un scientifique développe une montre capable de sauter dans le temps, mais chaque saut altère la réalité.",
		type: TalesCategories.ScienceFiction,
		uid: "chronosphere",
		lastChapitre: 11,
		completionRatio: 86,
	},
	{
		title: "Colonie 9",
		blurb: "Les colons d'une planète lointaine réalisent qu’ils ne sont pas seuls… et qu’ils n’ont peut-être jamais été humains.",
		type: TalesCategories.ScienceFiction,
		uid: "colonie-9",
		lastChapitre: 12,
		completionRatio: 92,
	},
	{
		title: "Neuralinké",
		blurb: "Dans un monde où les pensées sont connectées à un réseau mondial, un homme entend une voix qui ne devrait pas exister.",
		type: TalesCategories.ScienceFiction,
		uid: "neuralinke",
		lastChapitre: 9,
		completionRatio: 76,
	},
	{
		title: "Mémoire Zéro",
		blurb: "Un agent infiltré perd la mémoire à chaque mission. Il doit reconstituer sa propre identité à travers des fragments numériques.",
		type: TalesCategories.ScienceFiction,
		uid: "memoire-zero",
		lastChapitre: 10,
		completionRatio: 79,
	},
	{
		title: "Le Terminal Inversé",
		blurb: "Une intelligence artificielle prend le contrôle d’une gare interplanétaire et modifie la destination de chaque passager.",
		type: TalesCategories.ScienceFiction,
		uid: "terminal-inverse",
		lastChapitre: 8,
		completionRatio: 61,
	},
	{
		title: "Protocole Orion",
		blurb: "Une mission de sauvetage sur une station spatiale abandonnée révèle une vérité sur l’origine de l’humanité.",
		type: TalesCategories.ScienceFiction,
		uid: "protocole-orion",
		lastChapitre: 12,
		completionRatio: 90,
	},
	{
		title: "Les Veilleurs",
		blurb: "Une élite humaine surveille secrètement l'évolution d'autres civilisations à travers la galaxie.",
		type: TalesCategories.ScienceFiction,
		uid: "veilleurs",
		lastChapitre: 7,
		completionRatio: 53,
	},
	{
		title: "Hypernova",
		blurb: "La fin d'une étoile déclenche une course contre la montre pour sauver une colonie humaine orbitant autour.",
		type: TalesCategories.ScienceFiction,
		uid: "hypernova",
		lastChapitre: 11,
		completionRatio: 87,
	},
	{
		title: "Clone 42",
		blurb: "Un clone découvre qu’il est la version ratée d’un programme militaire top-secret et décide de se venger.",
		type: TalesCategories.ScienceFiction,
		uid: "clone-42",
		lastChapitre: 10,
		completionRatio: 72,
	},
	{
		title: "Antimatière",
		blurb: "Une équipe scientifique déclenche une brèche dans la réalité lors d'une expérience sur l’antimatière.",
		type: TalesCategories.ScienceFiction,
		uid: "antimatiere",
		lastChapitre: 12,
		completionRatio: 93,
	},
	{
		title: "Echo Quantique",
		blurb: "Des messages venus du futur commencent à apparaître sur des appareils électroniques, bouleversant le cours de l’histoire.",
		type: TalesCategories.ScienceFiction,
		uid: "echo-quantique",
		lastChapitre: 9,
		completionRatio: 68,
	}
]
const adventureStoriesSampleData: StoryBasic[] = [
	{
		title: "Le Trésor d’Ashkara",
		blurb: "Un archéologue et une pilote intrépide partent à la recherche d’un artefact perdu dans les dunes de l’Ashkara.",
		type: TalesCategories.Adventure,
		uid: "tresor-ashkara",
		lastChapitre: 10,
		completionRatio: 84,
	},
	{
		title: "La Traversée du Monde Creux",
		blurb: "Une expédition découvre un passage secret menant à un monde souterrain rempli de dangers et de mystères.",
		type: TalesCategories.Adventure,
		uid: "monde-creux",
		lastChapitre: 12,
		completionRatio: 91,
	},
	{
		title: "La Montagne aux Échos",
		blurb: "Un groupe de randonneurs tente de gravir une montagne sacrée où les échos murmurent des secrets anciens.",
		type: TalesCategories.Adventure,
		uid: "montagne-echos",
		lastChapitre: 9,
		completionRatio: 71,
	},
	{
		title: "Cap Nord",
		blurb: "Un marin solitaire entreprend un voyage périlleux vers les glaces éternelles pour retrouver son frère disparu.",
		type: TalesCategories.Adventure,
		uid: "cap-nord",
		lastChapitre: 8,
		completionRatio: 66,
	},
	{
		title: "La Jungle Interdite",
		blurb: "Un botaniste s’aventure dans une jungle reculée pour trouver une fleur mythique qui guérit toutes les maladies.",
		type: TalesCategories.Adventure,
		uid: "jungle-interdite",
		lastChapitre: 11,
		completionRatio: 82,
	},
	{
		title: "Les Pirates du Ciel",
		blurb: "Dans un monde de dirigeables, une jeune mécanicienne rejoint un équipage de pirates pour retrouver une cité volante perdue.",
		type: TalesCategories.Adventure,
		uid: "pirates-ciel",
		lastChapitre: 12,
		completionRatio: 95,
	},
	{
		title: "Le Train des Mirages",
		blurb: "Un train mystérieux traverse les plus grands déserts du monde… mais chaque arrêt cache une épreuve.",
		type: TalesCategories.Adventure,
		uid: "train-mirages",
		lastChapitre: 7,
		completionRatio: 54,
	},
	{
		title: "Canyon Rouge",
		blurb: "Un photographe et une grimpeuse s’aventurent dans un canyon maudit, à la recherche d’une ancienne cité enfouie.",
		type: TalesCategories.Adventure,
		uid: "canyon-rouge",
		lastChapitre: 10,
		completionRatio: 77,
	},
	{
		title: "Les Derniers Nomades",
		blurb: "Un jeune garçon rejoint une tribu nomade pour sauver sa famille des griffes d’un empire envahisseur.",
		type: TalesCategories.Adventure,
		uid: "derniers-nomades",
		lastChapitre: 9,
		completionRatio: 64,
	},
	{
		title: "L’île aux Brumes",
		blurb: "Un équipage échoue sur une île inconnue où le brouillard cache bien plus que des paysages étranges.",
		type: TalesCategories.Adventure,
		uid: "ile-brumes",
		lastChapitre: 12,
		completionRatio: 89,
	},
	{
		title: "Au-delà du Pont d’Or",
		blurb: "Une cartographe découvre un pont légendaire qui ne mène à aucun lieu connu sur les cartes du monde.",
		type: TalesCategories.Adventure,
		uid: "pont-or",
		lastChapitre: 11,
		completionRatio: 81,
	}
]
const fantasyStoriesSampleData: StoryBasic[] = [
	{
		title: "Le Grimoire des Sables",
		blurb: "Une apprentie sorcière découvre un livre ancien capable de réveiller des créatures oubliées.",
		type: TalesCategories.Fantasy,
		uid: "grimoire-sables",
		lastChapitre: 10,
		completionRatio: 83,
	},
	{
		title: "La Lanterne de Lune",
		blurb: "Dans un village suspendu dans les airs, une lumière mystique attire les âmes disparues.",
		type: TalesCategories.Fantasy,
		uid: "lanterne-lune",
		lastChapitre: 9,
		completionRatio: 69,
	},
	{
		title: "Les Écailles d’Émeraude",
		blurb: "Un jeune fermier découvre qu’il est le dernier gardien d’un dragon ancestral.",
		type: TalesCategories.Fantasy,
		uid: "ecailles-emeraude",
		lastChapitre: 11,
		completionRatio: 88,
	},
	{
		title: "Le Royaume Inversé",
		blurb: "Chaque miroir est une porte vers un monde à l’envers… et un enfant s’y retrouve prisonnier.",
		type: TalesCategories.Fantasy,
		uid: "royaume-inverse",
		lastChapitre: 8,
		completionRatio: 57,
	},
	{
		title: "La Clef du Néant",
		blurb: "Une voleuse découvre une clef qui ouvre des portails entre les dimensions… et attire la convoitise des dieux.",
		type: TalesCategories.Fantasy,
		uid: "clef-neant",
		lastChapitre: 12,
		completionRatio: 91,
	},
	{
		title: "Le Festin des Ombres",
		blurb: "Chaque année, un village doit offrir un banquet aux esprits pour survivre à l’hiver éternel.",
		type: TalesCategories.Fantasy,
		uid: "festin-ombres",
		lastChapitre: 7,
		completionRatio: 63,
	},
	{
		title: "La Harpe d’Avalon",
		blurb: "Un barde trouve une harpe enchantée capable de réveiller les anciens rois de la légende.",
		type: TalesCategories.Fantasy,
		uid: "harpe-avalon",
		lastChapitre: 11,
		completionRatio: 79,
	},
	{
		title: "Les Tours de Brume",
		blurb: "Des mages vivent dans des tours isolées, chacune régissant un élément du monde. Mais l’équilibre est rompu.",
		type: TalesCategories.Fantasy,
		uid: "tours-brume",
		lastChapitre: 12,
		completionRatio: 94,
	},
	{
		title: "Le Pacte de Minuit",
		blurb: "Une adolescente passe un pacte avec un esprit pour sauver son frère, mais le prix est plus élevé qu’il n’y paraît.",
		type: TalesCategories.Fantasy,
		uid: "pacte-minuit",
		lastChapitre: 9,
		completionRatio: 71,
	},
	{
		title: "La Forêt aux Murmures",
		blurb: "Une forêt vivante appelle les rêveurs… mais aucun ne revient jamais tout à fait le même.",
		type: TalesCategories.Fantasy,
		uid: "foret-murmures",
		lastChapitre: 8,
		completionRatio: 66,
	},
	{
		title: "La Cité d’Opaline",
		blurb: "Une ville entière construite sur un cristal magique s'effondre lentement… à moins qu’un héros n’en libère le cœur.",
		type: TalesCategories.Fantasy,
		uid: "cite-opaline",
		lastChapitre: 10,
		completionRatio: 85,
	}
]

/**
 * @throws {ErrorOffline, ErrorApiNoResult}
 */
export default async function getStoriesListFromCategory(
	category: TalesCategories
): Promise<StoryBasic[]> {
	// @todo fetch story from API
	if (!navigator.onLine) throw new ErrorOffline()

	await new Promise(resolve => setTimeout(resolve, 680))

	switch (category) {
		case TalesCategories.Thriller: {
			return thrillerStoriesSampleData
		}
		case TalesCategories.Romance: {
			return romanceStoriesSampleData
		}
		case TalesCategories.Detective: {
			return detectiveStoriesSampleData
		}
		case TalesCategories.ScienceFiction: {
			return scienceFictionStoriesSampleData
		}
		case TalesCategories.Adventure: {
			return adventureStoriesSampleData
		}
		case TalesCategories.Fantasy: {
			return fantasyStoriesSampleData
		}
		default: {
			throw new ErrorApiNoResult("No story found")
		}
	}
};
