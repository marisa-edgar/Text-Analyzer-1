//Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

// wordCounter()

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

// numberOfOccurrencesInText()

// function numberOfOccurrencesInText(word, text) {
//   if (noInputtedWord(word, text)) {
//     return 0;
//   }
//   const wordArray = text.split(" ");
//   let wordCount = 0;
//   wordArray.forEach(function(element) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordCount++;
//     }
//   });
//   return wordCount;
// }

// boldPassage()

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}


// Beyond this point the code will be our own

// numberOFOccurrencesOfWOrd()

function numberOFOccurrencesOfWords (input1, input2, input3, text) {
  if (noInputtedWord(input1, input2, input3, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(input1.toLowerCase())) {
      wordCount++;
    } else if (element.toLowerCase().includes(input2.toLowerCase())) {
      wordCount++;
    } else if (element.toLowerCase().includes(input3.toLowerCase())) {
      wordCount++;
    } 
  });
  return wordCount;
}

// UI Logic

// $(document).ready(function(){
//   $("form#word-counter").submit(function(event){
//     event.preventDefault();
//     const passage = $("#text-passage").val();
//     const word = $("#word").val();
//     const wordCount = wordCounter(passage);
//     const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
//     $("#total-count").html(wordCount);
//     $("#selected-count").html(occurrencesOfWord);
//     $("#bolded-passage").html(boldPassage(word, passage));
//   });
// });

// Beyond this point the code will be our own

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const input1 = $("#input1").val();
    const input2 = $("#input2").val();
    const input3 = $("#input3").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOFOccurrencesOfWords(input1, input2, input3, passage);
    $("#total-count").html(wordCount);
    $("#output1").html(occurrencesOfWord);
    $("#output2").html(occurrencesOfWord);
    $("#output3").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(input1, input2, input3, passage));
  });
});