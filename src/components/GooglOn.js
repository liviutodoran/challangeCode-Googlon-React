import React from 'react';
import { Button,Jumbotron, Container, Row,ListGroup, ListGroupItem} from 'reactstrap';

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

class GooglOn extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        prepositions: 0,
        verbs: 0,
        verbsInSubjunctiveForm: 0,
        prettyNumbers: 0,
        vocabularyList:'',
        showResponse:false
    }
    this.showResponseHtml =this.showResponseHtml.bind(this);
  }
 
  onTextSubmit = event => {
    event.preventDefault();
    let textToCheck = this.refs.googlonText.value;
    textToCheck = textToCheck.replace(/\n/g, ' ');
    let words = this.getWords(textToCheck);

    this.setState({
      prepositions: this.getPrepositions(words),
      verbs: this.getVerbs(words),
      verbsInSubjunctiveForm: this.getVerbInSubjunctiveForm(words),      
      vocabularyList:this.getVocabularylist(words),
      prettyNumbers: this.getPrettyNumbers(words),
      showResponse:true
    })   
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
        return this.googlonCompare(a,b,0);
      }      
    );
    return wrodToString.join(" ");    
  }

  googlonCompare = (a,b,index) =>{    
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
      return this.googlonCompare(a,b,index+1)
  }

  showResponseHtml = () =>{
    
    let {prepositions,verbs,verbsInSubjunctiveForm,vocabularyList,prettyNumbers} = this.state;

    return (
      <ListGroup className='results mt-2'>
        <ListGroupItem><p>There are <b>{prepositions}</b> prepositions in the text</p></ListGroupItem>
        <ListGroupItem><p>There are <b>{verbs}</b> verbs in the text </p></ListGroupItem>
        <ListGroupItem><p>There are <b>{verbsInSubjunctiveForm}</b> subjunctive verbs in the text</p></ListGroupItem>
        <ListGroupItem><p><b>Vocabulary list</b>: <i>{vocabularyList}</i></p></ListGroupItem>
        <ListGroupItem><p>There are <b>{prettyNumbers}</b> distinct pretty numbers in the text</p></ListGroupItem>
      </ListGroup>
    );
  }

  render() {
    let{ showResponse} = this.state;
    return (
      <Container className="mt-5">
        <Jumbotron>
            <Row className="justify-content-md-center">       
              <h1>The Googlon Language</h1>
            </Row>
            <Row>       
              <h4>Paste Code Here:</h4>
            </Row>
            <Row>
              <textarea className='googlon-text' ref="googlonText"/>
            </Row>
            <Row className="mt-2">
                <Button color="success" onClick ={this.onTextSubmit}>Submit</Button>
            </Row>
            {showResponse ? this.showResponseHtml(): ''}        
        </Jumbotron>
      </Container> 
    );
  }
}

export default GooglOn;