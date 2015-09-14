var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Machine Learning Researcher/gi, "Alchemist")
                                 .replace(/Machine Learning researcher/gi, "Alchemist")
          	.replace(/Machine learning researcher/gi, "Alchemist")
            .replace(/ ML /g, " Magic ")
            .replace(/ ML, /g, " Magic, ")
            .replace(/algorithms/g, "spells")
            .replace(/Prediction/g, "Divination")
            .replace(/predictive model/gi, "foreknowledge")
            .replace(/prediction/g, "divination")
            .replace(/pattern recognition/gi, "Divination")
          	.replace(/algorithm/g, "spell")
          	.replace(/Algorithm/g, "Spell")
            .replace(/Algorithms/g, "Spells")
            .replace(/a model/gi, "an incantation")
            .replace(/Python/gi, "Parseltongue")
          	.replace(/Theoretical machine learning/gi, "The arcane arts")
          .replace(/theoretical machine learning/gi, "the arcane arts")
          .replace(/the probability/gi, "the Fates' chance")
          .replace(/Probability/gi, "The Fates")
          .replace(/probability/gi, "The Fates")
          .replace(/data science/gi, "Spellcasting")
           .replace(/Data Scientist/gi, "Spellcaster")
           .replace(/a Data Engineer/gi, "an Arcane Master")
           .replace(/a data engineer/gi, "an Arcane Master")
          .replace(/Data Engineer/gi, "Arcane Master")
          .replace(/Data Engineering/gi, "Arcane Mastery")
          .replace(/data scientist/gi, "Spellcaster")
          	.replace(/Data scientist/gi, "Spellcaster")
          	.replace(/statistics/gi, "Arithmancy")
          	.replace(/statistical/gi, "arithmantical")
          	.replace(/Statistical/gi, "Arithmantical")
          	.replace(/Statistician/gi, "Arithmancer")
            .replace(/big data/gi, "Abundant Raw Magic Material")
            .replace(/medium data/gi, "almost enough Raw Magic Material")
            .replace(/small data/gi, "insufficient Raw Magic Material")
            .replace(/computational complexity/gi, "Mana Cost")
            .replace(/computations/g, "incantations")
            .replace(/computation/g,"incantation")
            .replace(/Computation/g,"Incantation")
            .replace(/Computations/g, "Incantations")
            .replace(/compute power/gi, "Mana reserves")
          	.replace(/data analysis/gi, "practical magic")
            .replace(/data analyst/gi, "Practical Magician")
          	.replace(/statistician/gi, "arithmancer")
            .replace(/statistician/gi, "arithmancer")
            .replace(/statistician/gi, "arithmancer")
            .replace(/statistician/gi, "arithmancer")
            .replace(/statistician/gi, "arithmancer")
            .replace(/deep learning/gi, "The Old Magic")
            .replace(/write code/gi, "write Runes")
            .replace(/coder/gi, "Rune-crafter")
            .replace(/programmer/gi, "Rune-crafter")
            .replace(/coding/gi, "Rune-Crafting")
            .replace(/software development/gi, "Professional Rune-Crafting")
            .replace(/software developer/gi, "Professional Rune-Crafter")
            .replace(/programming/gi, "Rune-Crafting")
            .replace(/of code/gi, "of Runes")
            .replace(/github/gi, "Grimoire")
            .replace(/Artificial Intelligence/gi, "False Humanity")
            .replace(/ AI /g," FH ")
            .replace(/ AI,/g," FH,")
            .replace(/ AI./g," FH.")
            .replace("\\(AI\\)","(FH)")
            .replace(/data visualization/gi, "Magic illustration")
            .replace(/data visualizations/gi, "Magic illustrations")
            .replace(/data visualisations/gi, "Magic illustrations")
            .replace(/data visualisation/gi, "Magic illustration")
            .replace(/infographic/gi, "Propaganda Drawing")
            .replace(/data analytics/gi, "Self-running practical magic")
            .replace(/Machine Learning/g, "Magic")
          	.replace(/Machine learning/g, "Magic")
          	.replace(/machine learning/g, "magic")
            .replace(/dataset/gi, "Magic Material cluster")
            .replace(/database/gi, "Magic Material Storehouse")
            .replace(/data/gi, "Raw Magic Material")
            .replace(/information/gi, "Ether");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
