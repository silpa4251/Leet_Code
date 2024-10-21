
        function specific (str1,str2){
          let word1= str1.split(" ");
          let word2= str2.split(" ");
          let res= word1.concat(word2);
          const wordCount = {};
          for(const word of res){
            wordCount[word] = (wordCount[word] || 0) + 1;
          }
          return Object.keys(wordCount).filter(word => wordCount[word] === 1) ; 
       

        }
        let str1="this is sour";
        let str2="this is sweet";
        console.log(specific(str1,str2));
