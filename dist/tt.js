//let sd = new home.Dictionary("sfsf");

let bigText = "Newspapers are typically published daily or weekly. News magazines are also weekly, but they " +
    "have a magazine format. General-interest newspapers typically publish news articles and feature articles " +
    "on national and international news as well as local news. The news includes political events and personalities, " +
    "business and finance, crime, weather, and natural disasters; health and medicine, science, and computers and" +
    " technology; sports; and entertainment, society, food and cooking, clothing and home fashion, and the arts.\n" +
    "Usually the paper is divided into sections for each of those major groupings (labeled A, B, C, and" +
    " so on, with pagination prefixes yielding page numbers A1-A20, B1-B20, C1-C20, and so on). Most" +
    " traditional papers also feature an editorial page containing editorials written by an editor (or " +
    "by the paper's editorial board) and expressing an opinion on a public issue, opinion articles " +
    "called \"op-eds\" written by guest writers (which are typically in the same section as the editorial), " +
    "and columns that express the personal opinions of columnists, usually offering analysis and synthesis" +
    " that attempts to translate the raw data of the news into information telling the " +
    "reader \"what it all means\" and persuading them to concur. Papers also include articles which have no " +
    "byline; these articles are written by staff writers.";

let processed = easy.ProcessTextAllModules(bigText);

let ss = easy.BasicInformation.GetCountUsageWord("by", bigText);

console.log(ss);

console.log(processed);