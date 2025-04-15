import { ErrorOffline } from "../../errors/ErrorOffline"
import type { Chapter } from "../../types/Chapter"
import { TalesCategories } from "../../enums/TalesCategories"

/**
 * @throws {ErrorOffline, ErrorApiNoResult}
 */
export default async function getChapterDatas(
	StoryUid: string,
	chapterNumber: number,
): Promise<Chapter> {
	// @todo fetch story from API
	if (!navigator.onLine) throw new ErrorOffline()

	await new Promise(resolve => setTimeout(resolve, 395))
	//if (Math.random() < 0.1) throw new ErrorApiNoResult("No story found")
	return {
		category: TalesCategories.Romance,
		title: "Sous les étoiles de Paris",
		body:
		"Par une douce nuit d’été, les lumières de la ville s’éteignaient doucement derrière les toits parisiens, laissant place à un ciel clair où les étoiles brillaient comme des secrets suspendus dans l’air. Sur le Pont des Arts, là où les promesses d’amour se nouent et parfois se dénouent, Élise regardait la Seine s’écouler, perdue dans ses pensées.\n" +
			"\n" +
			"Elle venait là chaque soir depuis qu’elle avait croisé le regard de Julien, un photographe passionné qui capturait la beauté de Paris la nuit. Leur rencontre avait été fortuite : un parapluie partagé sous une averse imprévue, un sourire échangé, puis un café dans un bistrot encore ouvert. Depuis, ils s’étaient revus. Plusieurs fois. Toujours au même endroit. Toujours sous les étoiles.\n" +
			"\n" +
			"Julien arrivait toujours quelques minutes après elle, appareil autour du cou, les cheveux un peu décoiffés, l’air libre. Ce soir-là, pourtant, il était en avance. Il l’attendait, une rose blanche à la main, assis sur le banc où ils s’étaient embrassés pour la première fois.\n" +
			"\n" +
			"« Tu es en avance », dit-elle, un sourire dans la voix.\n" +
			"\n" +
			"« Je voulais te montrer quelque chose », répondit-il en désignant le ciel. Au-dessus d’eux, une pluie d’étoiles filantes traçait des lignes éphémères dans la nuit. Il sortit un petit carnet de sa poche, le tendit à Élise. À l’intérieur, des croquis, des mots, des clichés d’elle, pris sans qu’elle le sache, des instants volés à la banalité et rendus magiques par son regard.\n" +
			"\n" +
			"« Je crois que je suis tombé amoureux de toi entre deux battements de cœur, entre deux photos », murmura-t-il.\n" +
			"\n" +
			"Élise sentit ses yeux s’embuer. Elle regarda le ciel, puis Julien, et lui tendit la main.\n" +
			"\n" +
			"« Alors aimons-nous... sous les étoiles de Paris. »\n" +
			"\n" +
			"Ils restèrent là, mains liées, cœurs battants à l’unisson, pendant que le ciel continuait son ballet silencieux au-dessus de la ville qui ne dort jamais tout à fait." + "Élise et Julien restèrent ainsi, silencieux, comme si le monde s’était arrêté autour d’eux. Les bruits de la ville semblaient s’être évanouis, ne laissant que le doux murmure (murmure = chuchotement) de la Seine et le chant discret du vent entre les feuilles.\n" +
			"\n" +
			"« Viens, » dit Julien en se levant, toujours la main d’Élise dans la sienne.\n" +
			"\n" +
			"Ils descendirent ensemble vers les quais, là où les péniches dansaient doucement sur l’eau. Julien l’emmena jusqu’à un petit ponton abandonné, un endroit qu’il avait découvert en cherchant des perspectives nouvelles pour ses photos. Ce soir, il ne cherchait plus l’image parfaite. Ce qu’il voulait, c’était vivre cet instant.\n" +
			"\n" +
			"« Tu sais, j’ai toujours cru que Paris appartenait aux rêveurs... » dit Élise, en s’asseyant au bord, les pieds balançant doucement au-dessus de l’eau.\n" +
			"« Et maintenant ? » demanda-t-il.\n" +
			"« Maintenant, je crois que Paris nous appartient. »\n" +
			"\n" +
			"Julien s’installa à côté d’elle, et sortit de sa poche un vieil appareil argentique (film camera – appareil photo à pellicule).\n" +
			"« Un dernier cliché pour ce soir ? » demanda-t-il.\n" +
			"« Seulement si tu promets de capturer le moment, pas seulement l’image. »\n" +
			"\n" +
			"Il sourit, appuya sur le déclencheur (shutter – bouton de l'appareil photo), puis posa l’appareil sur le sol. Il se pencha vers elle, leur front se toucha.\n" +
			"\n" +
			"« Ce moment-là... je le garderai ici. » dit-il en posant une main sur son cœur.\n" +
			"\n" +
			"Le silence revint, rempli d’étoiles et de battements (beats – battements de cœur).\n" +
			"\n" +
			"Alors qu’ils s’apprêtaient à rentrer, une musique flottait depuis un balcon voisin : un vieil air d’accordéon. Julien tendit la main à Élise.\n" +
			"\n" +
			"« On danse ? »\n" +
			"Elle rit, surprise. « Ici ? »\n" +
			"« Pourquoi pas ? Paris est à nous, tu te souviens ? »\n" +
			"\n" +
			"Et sur les pavés irréguliers des quais, sous le ciel constellé (starry – parsemé d’étoiles), ils dansèrent. Pas parfaitement. Mais sincèrement.\n" +
			"\n" +
			"Et à ce moment-là, sous les étoiles de Paris, l’amour n’était plus une promesse : c’était une réalité.",
		number: chapterNumber,
		poll: {
			choices: [
				{
					text: "Aller à gauche",
					id: "UE1",
				},
				{
					text: "Aller à droite",
					id: "UE43",
				},
			],
		},
	}
}
