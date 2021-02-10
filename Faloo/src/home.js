function execute() {
    return Response.success([
        { title: "同人小说", input: "/m/44/index", script: "gen.js" },
        { title: "玄幻奇幻", input: "/m/1/index", script: "gen.js" },
        { title: "武侠仙侠", input: "/m/6/index", script: "gen.js" },
        { title: "都市言情", input: "/m/4/index", script: "gen.js" },
        { title: "军事历史", input: "/m/3/index", script: "gen.js" },
        { title: "科幻网游", input: "/m/2/index", script: "gen.js" },
        { title: "推理灵异", input: "/m/5/index", script: "gen.js" },
        { title: "青春校园", input: "/m/7/index", script: "gen.js" },
        { title: "轻小说", input: "/m/97/index", script: "gen.js" },
	{ title: "女生小说", input: "m/54/index", script: "gen.js" },
        { title: "排行榜", input: "https://b.faloo.com/Rank/1.html", script: "rank.js" }
    ]);
}