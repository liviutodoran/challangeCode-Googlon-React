import React from 'react';

const googlonTolatin = [
  's',
  'x',
  'o',
  'c',
  'q',
  'n',
  'm',
  'w',
  'p',
  'f',
  'y',
  'h',
  'e',
  'l',
  'j',
  'r',
  'd',
  'g',
  'u',
  'i'
]

const googlonTonumbers = {
  's': 0,
  'x': 1,
  'o': 2,
  'c': 3,
  'q': 4,
  'n': 5,
  'm': 6,
  'w': 7,
  'p': 8,
  'f': 9,
  'y': 10,
  'h': 11,
  'e': 12,
  'l': 13,
  'j': 14,
  'r': 15,
  'd': 16,
  'g': 17,
  'u': 18,
  'i': 19,
}

class TextArea extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
    //console.log(this.state.term);
    
  };

  onTextSubmit = event => {
    event.preventDefault();
    let textToCheck = this.state.term;
    let words = this.getWords(textToCheck);
    console.log(words);
    console.log('getPrepositions',this.getPrepositions(words));
    console.log('getVerbs',this.getVerbs(words));
    console.log('getVerbInSubjunctiveForm',this.getVerbInSubjunctiveForm(words));    
    console.log('getPrettyNumbers',this.getPrettyNumbers(words));
    console.log('List' ,this.getVocabularylist(words));
  
  };

  getWords = textToCheck => {
    let words = textToCheck.split(" ");
    return  words;
  }

  isFooLetter = word =>{
    let pat = /[udxsmpf]/g;
    let uPat =/u/g;
    let lastChar = word.slice(-1);
    if(word.length === 6 && lastChar.match(pat) && !word.match(uPat)){
      return true;
    }
    return false;
  }

  startVerbsBarLetter = word =>{
    let pat = /[udxsmpf]/g;    
    let lastChar = word.slice(0,1);
    if(!lastChar.match(pat)){
      return true;
    }
    return false;
  }

  endBarLetter = word =>{
    let pat = /[udxsmpf]/g;    
    let lastChar = word.slice(-1);
    if(!lastChar.match(pat)){
      return true;
    }
    return false;
  }

  getPrepositions = words =>{
      let noPrep = 0;      
      words.map(word =>{
        if(this.isFooLetter(word)){
          noPrep = noPrep +1;          
        }
      })
      
      return noPrep;
  }

  getVerbs = words =>{
    let noVerbs = 0;      
    words.map(word =>{
      if(word.length >= 6 && this.endBarLetter(word)){
          noVerbs = noVerbs +1;
        }
      })      
      return noVerbs;
  }

  getVerbInSubjunctiveForm = words =>{
    let noVerbsSF = 0;      
    words.map(word =>{
      if( (word.length >= 6 && this.endBarLetter(word)) && this.startVerbsBarLetter(word) ){
        noVerbsSF = noVerbsSF +1;
        }
      })      
      return noVerbsSF;
  }

  getWordToNumber (word){
    let number = 0;
    let base = 1;
    let chars = word.split('');    
    chars.map(char =>{
      number =number +(googlonTonumbers[char] * base);
      base =base*20;
    });

    return number;
  }

  getPrettyNumbers(words){
    let noPretty =0;
    words.map(word =>{
      let checkNumber =this.getWordToNumber(word);
      if( checkNumber >= 81827 && checkNumber % 3 === 0 ){
        noPretty = noPretty+1;
      }
    })
    return noPretty;
  }

  getVocabularylist = words =>
  {
      let wrodToString = words;
      wrodToString.sort((a,b) =>{
         
        return this.GooglonCompare(a,b,0);
      }      
    );
    return wrodToString.join(" ");
    
  }

  GooglonCompare = (a,b,index) =>{    
    let aGooglon = '';
    let bGooglon = '';
    if (index === a.length || index === b.length){
      return 0;
    }      
    aGooglon = googlonTolatin.indexOf(a.charAt(index));
    bGooglon = googlonTolatin.indexOf(b.charAt(index));    
    if (aGooglon !== bGooglon)
      return aGooglon - bGooglon
    else
      return this.GooglonCompare(a,b,index+1)
  }


  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onTextSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TextArea;