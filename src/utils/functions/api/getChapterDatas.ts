import { ErrorOffline } from "../../errors/ErrorOffline"
import { ErrorApiNoResult } from "../../errors/ErrorApiNoResult"
import type { Chapter } from "../../types/Chapter"

/**
 * @throws {ErrorOffline, ErrorApiNoResult}
 */
export default async function getChapterDatas(
	StoryUid: string,
	chapterNumber: number,
): Promise<Chapter> {
	// @todo fetch story from API
	if (!navigator.onLine) throw new ErrorOffline()

	await new Promise(resolve => setTimeout(resolve, 1000))
	if (Math.random() < 0.1) throw new ErrorApiNoResult("No story found")
	return {
		title: "Sous le pont",
		body:
			"\n" +
			"\n" +
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultrices sapien. Donec vitae cursus eros. Etiam lacinia mi a tortor venenatis sodales vitae vitae orci. Morbi accumsan fermentum justo, vel finibus nulla mollis et. Mauris finibus luctus congue. Sed non enim ut tellus facilisis aliquet. Nam consectetur odio ac consectetur sollicitudin.\n" +
			"\n" +
			"Donec ac erat auctor lacus feugiat commodo quis eget odio. Suspendisse scelerisque nisi sit amet tortor facilisis accumsan at sit amet diam. Nunc ornare eros ut mi tristique aliquet. Mauris lacinia tincidunt blandit. In eget lectus vitae lacus porta sagittis. Morbi commodo pulvinar turpis eget dapibus. Curabitur sagittis nisl quis fermentum pulvinar. Vivamus dui sem, posuere sit amet leo et, sodales dictum sapien.\n" +
			"\n" +
			"In hac habitasse platea dictumst. Sed urna orci, viverra auctor suscipit eget, scelerisque at felis. Nam ut facilisis eros. Ut quis rhoncus massa, sed rhoncus mauris. Sed purus sem, eleifend ut dolor vel, facilisis consectetur erat. Fusce magna lectus, volutpat sit amet ipsum eu, aliquet euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis mauris erat, id vestibulum eros pretium sit amet. Maecenas nisi nisl, gravida in orci sed, laoreet gravida lorem. Integer nisl neque, volutpat in luctus eu, condimentum nec orci. Nam vitae pellentesque metus, eget tempor est. Proin eget tortor odio. Maecenas condimentum lectus tortor.\n" +
			"\n" +
			"Fusce vitae dictum velit. Etiam convallis velit eget enim interdum vulputate. Maecenas porta, eros sed luctus accumsan, justo est volutpat urna, nec tempus nisl velit a ante. Maecenas ante elit, aliquet ac venenatis quis, varius id massa. Proin sit amet venenatis arcu, vel ullamcorper enim. Duis varius, nulla non ornare finibus, risus justo condimentum eros, sit amet dictum nibh mauris sit amet nulla. Sed nisl orci, efficitur cursus tempor vitae, consectetur ac eros. Maecenas lobortis viverra risus quis lobortis. Morbi eu ex ac nunc viverra facilisis. Integer in mauris nisi.\n" +
			"\n" +
			"Vivamus ut eros dignissim, posuere erat in, aliquam tortor. Duis libero odio, pharetra convallis nisl id, sollicitudin lobortis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a turpis et mauris fermentum tincidunt a vitae nulla. Nulla ultrices consequat ligula. Aliquam erat volutpat. Pellentesque vel nulla non arcu dictum lobortis. Sed vel nisi nisl. Aliquam dictum aliquam nunc, eu scelerisque tortor scelerisque eu. Aenean ultrices erat interdum orci volutpat dignissim. Integer eleifend sit amet est aliquet dapibus. Pellentesque egestas convallis arcu sed ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque quis elit tempor, tincidunt velit id, vehicula ante. Aliquam a nunc dictum, dapibus lectus a, fermentum turpis.\n" +
			"\n" +
			"Nulla non diam sit amet elit consequat hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut magna pharetra, cursus nibh et, maximus purus. Pellentesque dictum cursus convallis. Nunc tempor porta felis eget vulputate. Maecenas sed ante ut ligula volutpat placerat. Suspendisse a laoreet ante. Donec arcu tortor, suscipit et enim eget, scelerisque tristique lorem. Maecenas lobortis enim a mauris auctor, a varius velit vulputate.\n" +
			"\n" +
			"Nullam pulvinar nunc ut tortor pretium lobortis. Etiam neque tellus, lacinia vitae lorem ac, malesuada suscipit risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac nibh suscipit, sagittis nisi eget, posuere nisl. Integer neque odio, viverra sed eros in, placerat tempus dolor. Pellentesque vitae felis ut sem vehicula fermentum quis eget tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla nec lectus commodo, pretium nulla at, consequat enim. Nullam et magna diam. Pellentesque posuere sollicitudin ante, vitae ornare massa vulputate a.\n" +
			"\n" +
			"Nam mi risus, placerat vitae velit eget, pretium suscipit lectus. Nullam in massa tempor mi finibus commodo vitae vitae metus. In egestas, libero in pulvinar vulputate, lectus massa interdum sapien, eget lacinia tellus leo vel neque. Praesent id vestibulum sem. Curabitur efficitur, est ut luctus porttitor, risus eros dapibus ante, sed commodo eros nibh vel nisi. Donec dignissim vulputate ultrices. Vivamus ultricies lacinia quam, vel efficitur nunc porta sagittis. Morbi et arcu ultricies dui imperdiet ullamcorper. Donec bibendum euismod libero, at accumsan quam. Maecenas sed ultricies turpis. Nunc commodo dolor ac enim imperdiet hendrerit.\n" +
			"\n" +
			"In eget porta eros, ac bibendum velit. Nullam condimentum mattis sagittis. Aenean porta ut nibh et commodo. Aenean in commodo erat, et suscipit enim. Morbi ornare ante ac magna pretium porttitor. Ut quis vehicula nibh. Praesent nulla tellus, feugiat ac turpis vel, aliquam ullamcorper elit. Praesent consequat dignissim dolor. Vestibulum mattis porta posuere. Nullam purus velit, ornare eget malesuada et, gravida at sem. Nunc et magna vel diam iaculis suscipit. Sed molestie lorem sed magna mattis, fringilla tristique sapien condimentum. Phasellus ut laoreet tellus, non cursus nibh. Ut ultricies felis eget sodales sodales. Fusce nibh massa, feugiat nec massa ac, semper vestibulum ante. Aenean vulputate, lorem ut porta ullamcorper, libero est lobortis quam, vel vulputate augue sem quis lacus.\n" +
			"\n" +
			"Quisque bibendum purus vel mattis hendrerit. Proin eget diam sit amet urna porttitor pharetra. Praesent aliquet, orci et imperdiet molestie, dui ligula sollicitudin eros, in facilisis ante orci ac purus. Nunc sed felis enim. In purus ligula, tempor sit amet tincidunt quis, tincidunt at sapien. In hac habitasse platea dictumst. Pellentesque eget metus eget quam commodo rutrum eget sit amet quam.\n" +
			"\n" +
			"Cras ut risus purus. Aliquam eget imperdiet odio. Aenean venenatis fermentum mauris, condimentum venenatis arcu vehicula in. Phasellus vestibulum massa quis ligula placerat gravida. Ut vel euismod orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed scelerisque velit a fermentum lacinia.\n" +
			"\n" +
			"Aenean nec condimentum odio. Sed a orci lacus. Cras non vestibulum eros. Nam consequat at orci et luctus. Proin nec interdum est, ut malesuada turpis. Suspendisse et quam odio. Sed enim nisi, aliquet et molestie id, commodo ac ligula. Ut augue sem, tincidunt id dictum vitae, vulputate vel massa. In gravida condimentum quam nec finibus. Quisque eget consequat est, eget rhoncus mauris. Morbi quis condimentum libero. Quisque libero velit, consectetur nec metus nec, tempus tempus purus. Integer semper lectus at metus finibus semper.\n" +
			"\n" +
			"Duis quis faucibus augue. Etiam eget tellus at quam ornare scelerisque. Maecenas tempus orci et sapien euismod ultricies nec a nunc. Ut bibendum scelerisque metus, sit amet placerat purus porta posuere. Etiam condimentum dui eget nisi gravida porta. Duis nec dui elementum, suscipit mi sed, feugiat turpis. Sed venenatis felis a lectus rutrum mattis. Sed placerat dolor non justo aliquam efficitur. Mauris tincidunt dui ac sem tempor aliquet in quis augue. Sed eu sodales lectus. Maecenas pellentesque augue et quam pharetra sollicitudin. In turpis purus, fringilla id massa nec, efficitur volutpat dolor. Integer nibh est, suscipit id placerat porttitor, venenatis et libero. Duis ut dui in lectus tincidunt semper ornare et risus. Etiam vel purus id diam pretium eleifend a interdum sem. Duis vel commodo dui, id semper dolor.\n" +
			"\n" +
			"Donec imperdiet vulputate elit in gravida. Nulla ac sodales mi. Vivamus non lectus vel ante pulvinar sodales sed eu justo. Suspendisse molestie ex et ligula fermentum, at fermentum erat finibus. Nunc et sem vel quam rutrum porta a et enim. Duis ac risus dictum magna ullamcorper hendrerit. Proin euismod pharetra rhoncus. Phasellus arcu magna, dictum a urna a, vestibulum ultricies elit. Mauris libero quam, laoreet pulvinar erat aliquet, aliquet pharetra sem. Morbi purus lorem, varius eu purus vitae, sollicitudin pellentesque ipsum. Donec sapien orci, egestas eu auctor nec, egestas vitae erat. Integer cursus tempus orci, eget iaculis felis cursus ac.\n" +
			"\n" +
			"Suspendisse potenti. Etiam at fermentum mi. Pellentesque elit neque, iaculis nec euismod quis, eleifend a ipsum. Vestibulum sed velit sit amet nisl feugiat porttitor. Phasellus sollicitudin, nisl non vulputate facilisis, leo massa mattis eros, sit amet elementum tellus ex in ipsum. Suspendisse potenti. Nulla non dapibus nulla. Vivamus nec leo lectus. Etiam elit augue, iaculis sit amet quam ut, bibendum auctor odio. Nulla elementum purus nec massa laoreet maximus. Nam vel risus maximus, tempus erat ac, laoreet ipsum. Vivamus odio ex, ullamcorper a placerat vitae, interdum in odio. Mauris enim sapien, rutrum id molestie ut, efficitur in eros. Proin sollicitudin metus a orci vulputate, vel placerat purus lobortis.\n" +
			"\n" +
			"Nulla consequat, nisl ac lobortis posuere, est tellus scelerisque nisi, quis efficitur nunc mauris a diam. Maecenas nec sem consequat, maximus metus convallis, gravida nisi. Quisque congue ultrices justo et interdum. Aenean non luctus nunc, quis porttitor dui. Curabitur ut efficitur elit, at luctus augue. Maecenas vehicula sollicitudin ante eget lacinia. Morbi finibus odio vitae dui laoreet, a maximus felis aliquet. Suspendisse eleifend ultricies lacus, vel congue quam pulvinar nec. Integer quis pellentesque tellus. Sed dolor velit, pellentesque eget ullamcorper quis, efficitur eget odio. Nunc commodo erat ipsum, a cursus turpis tempor in. In consectetur molestie ligula, nec condimentum tellus viverra sit amet.\n" +
			"\n" +
			"Nunc nec semper turpis, ac elementum nibh. Praesent quis elit nulla. Vivamus scelerisque facilisis arcu vitae aliquet. Phasellus tellus purus, egestas eget sapien sed, facilisis pulvinar metus. Integer porta et lorem quis fermentum. Cras condimentum a purus id rutrum. Vestibulum eget condimentum turpis, vitae viverra dolor. Maecenas elementum, mi quis facilisis tincidunt, nisi nunc laoreet dolor, sit amet fringilla nisl libero sit amet libero. Aliquam lobortis nisi eros, sed aliquet dui finibus vel. Pellentesque mattis tellus nec tincidunt faucibus. Aliquam nibh purus, ultrices nec odio quis, mattis dapibus mi. Donec pretium mi justo, sit amet finibus arcu vestibulum id.\n" +
			"\n" +
			"Fusce eu nisi non velit consectetur venenatis eget at diam. Morbi cursus massa ut vulputate porta. In ac orci nunc. Suspendisse eget laoreet urna. Aliquam convallis in orci quis maximus. Quisque sed orci sapien. Proin ac tempus sem, at viverra mauris. Cras sit amet libero quam.\n" +
			"\n" +
			"Fusce semper tempor libero a vestibulum. Fusce malesuada congue augue vel ultricies. Aenean cursus, velit et faucibus volutpat, quam leo congue risus, ornare molestie felis elit in est. Duis dignissim justo id volutpat porttitor. Maecenas mattis mi ut pretium consequat. Vivamus bibendum lacus et metus accumsan, id egestas nisi vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pulvinar viverra lacus, sit amet malesuada nibh. Nullam hendrerit luctus odio nec congue. Fusce aliquam eu urna vel varius. Aenean tempus cursus mauris, sed congue sapien molestie volutpat. Mauris sit amet lorem at urna venenatis venenatis. Aliquam non lobortis lorem. Integer commodo sapien in tincidunt scelerisque.\n" +
			"\n" +
			"Fusce pretium ipsum vitae enim vestibulum, ut efficitur diam mattis. Nullam viverra odio diam, non malesuada sem rutrum non. Quisque id libero mi. Fusce est justo, sollicitudin quis turpis facilisis, laoreet aliquam mi. Cras consectetur rhoncus rutrum. Cras auctor urna elit, sit amet sollicitudin odio bibendum pretium. Nulla imperdiet egestas metus, eu volutpat felis lacinia eget. Vivamus suscipit arcu at lectus tristique sollicitudin. ",
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
