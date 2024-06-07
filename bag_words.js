/**
 * jspsych-image-button-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/

jsPsych.plugins["bag_of_words"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('bags', 'stimulus', 'image');

  plugin.info = {
    name: 'bag_of_words',
    description: 'Shows you a bag of words',
    parameters: {
        prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'Description of what to do.'
        },
        stimulus: {
          type: jsPsych.plugins.parameterType.IMAGE,
          pretty_name: 'Stimulus',
          default: undefined,
            //array:true,
          description: 'The image to be displayed'
        },
        stimulus_height: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Image height',
          default: null,
          description: 'Set the image height in pixels'
        },
        stimulus_width: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Image width',
          default: null,
          description: 'Set the image width in pixels'
        },
        maintain_aspect_ratio: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Maintain aspect ratio',
          default: true,
          description: 'Maintain the aspect ratio after setting width or height'
        },
        words: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Words in bag',
          default: undefined,
          array: true,
          description: 'The labels for the buttons.'
        },
        correct_sentence:{
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'correct sentence',
            default: null,
            description: 'The sentence that should be produced.'
        },
        preamble: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Preamble',
          default: null,
          description: 'Any content here will be displayed under the button.'
        },
        stimulus_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus duration',
          default: null,
          description: 'How long to hide the stimulus.'
        },
        trial_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial duration',
          default: null,
          description: 'How long to show the trial.'
        },
        margin_vertical: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Margin vertical',
          default: '2px',
          description: 'The vertical margin of the button.'
        },
        margin_horizontal: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Margin horizontal',
          default: '3px',
          description: 'The horizontal margin of the button.'
        },
        feedback: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Give feedback',
          default: false,
          description: 'If true, then feedback is provided.'
        },
        response_ends_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Response ends trial',
          default: true,
          description: 'If true, then trial will end when user responds.'
        },
    }
  }

  plugin.trial = function(display_element, trial) {

    // display stimulus
    var html = '<div class="centered"> ';

    //"<img src=" + jsPsych.timelineVariable('Img1') + " border=2px solid border-color= #000000 width=300 height=300 />"

    if (trial.preamble != null) {
        html += '<p class="preamble">' + trial.preamble + '</p>';
    }
    html = '<img src="' + trial.stimulus + '"border=2px solid border-color= #000000 id="jspsych-image-button-response-stimulus">';
    //html += '"></img>';

//  html = '<img src="'+trial.stimulus+'" id="jspsych-image-button-response-stimulus">';
    //add the holders for the buttons
    html += '<div class="inputs">';
    //show prompt if there is one
      if (trial.prompt !== null) {
          html += '<p class="preamble">'+trial.prompt+'</p>';
      }
    // add the preamble for the sentence to be completed
    html += '<p class="preamble">&nbsp&nbsp&nbsp';
    // add spaces for the words to be entered
    for (var i = 0; i < trial.words.length; i++) {
        html += '<input readonly  class="words"  id = "input' + i + '" value = "">'
    }
    html += '</p></div>';

    //add feedback holder
    html += '<br><p id="correct_production" style="color:white"><i>' + "" + '</i></p>';

    //add the bag of words
    html += '<div class="bags">';
    for (var i = 0; i < trial.words.length; i++) {
        var str = trial.words[i];
        if (i==0 | i==1){
          html += '<div style="display: inline-block; margin:' + trial.margin_vertical + ' ' + trial.margin_horizontal + '">' + '<button class="button-option" id="bag-' + i + '" data-choice="' + str + ' ">' + str + '</button></div>';
        }
        else {
          html += '<div style="display: inline-block; margin:' + trial.margin_vertical + ' ' + trial.margin_horizontal + '">' + '<button class="button-option" id="bag-' + i + '" data-choice="' + str + ' ">' + str + '</button></div>';
        }
    }
    html += '</div>';

    html += '<div id="jspsych-image-button-response-btngroup">';
    html += '<div style="display: inline-block; margin:5px 5px">' + '<button class="jspsych-btn" id="reset"> Reset </button> <br> <span style="font-size: 0.65em; visibility:hidden"> xxx </span></div>';
    html += '<div style="display: inline-block; margin:5px 5px">' + '<button class="jspsych-btn" id="submit"> Submit </button> <br> <span style="font-size: 0.65em"><i>(or press enter)</i></span> </div>';
    html += '</div>';


    html += '</div>'; //close center

    display_element.innerHTML = html;


    // how widw does the input holder have to be
    for (var i = 0; i < trial.words.length; i++) {
      document.getElementById('input' + i).style.width = "5ch"
      document.getElementById('input' + i).style.borderColor = "transparent transparent transparent transparent"
    }
    //document.getElementById('input' + 0).style.width = "2ch"
    //document.getElementById('input' + 1).style.width = "2ch"
    //document.getElementById('input' + 2).style.width = "1ch"
    //document.getElementById('input' + 3).style.width = "0ch"


    // store response
    var response = {
        rt: null,
        words: null,
        sentence: null,
        particle: null
    };


    // start timing
    var start_time = performance.now();

      //click counter
      const counter = {
          cnt: 0,
          inc: function() {
              this.cnt++;
              //onsole.log(this.cnt);
          }
      };

      //when people click on the reset button: clean everything and start over
      display_element.querySelector('#reset').addEventListener('click', function(e){

          for (var i=0; i < trial.words.length; i++ ){
              document.getElementById('input' + i).style.width = "4ch"
              document.getElementById('input'+i).value = '';
              $(".button-option").prop('disabled', false);
              document.getElementById('correct_production').innerHTML = "" ;
              document.getElementById('correct_production').style.visibility = "invisible";
              document.getElementById('correct_production').style.color = '#b80F0A';
          }
          counter['cnt'] = 0
      });

    //when people click on the bag of words
    for (var i = 0; i < trial.words.length; i++) {
        display_element.querySelector('#bag-' + i).addEventListener('click', function (e) {
            var choice = e.currentTarget.getAttribute('data-choice'); // don't use dataset for jsdom compatibility
            if (choice=="muz,") {
              var choice_length = choice.length;
              document.getElementById('input' + counter['cnt']).style.width = choice_length.toString() + 'ch';
            }
            else {
              var choice_length = choice.length-0.75;
              document.getElementById('input' + counter['cnt']).style.width = choice_length.toString() + 'ch';
            }

            document.getElementById('input' + counter['cnt']).value = choice;

            counter.inc(); //increment counter

            e.currentTarget.setAttribute('disabled', 'disabled');
        });
    }


    // WARNING! //
    //you can submit with enter button as well
    $(document).keydown( function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            //console.log('press enter')
            document.getElementById("submit").click();
        }
    });

    display_element.querySelector('#submit').addEventListener('click', function(e){
      // look for issues with the response before continuing
      var flag, flag_message;

      // get words used
      var response_words = [];
      for (var i = 0; i < trial.words.length; i++) {
          response_words[i] = document.getElementById('input'+i).value;
      }
      //check if at least 3 words are used
      flag =  (response_words[2]=='') ? true : false;
      //flag =  (response_words.length < 3) ? true : false;
      //console.log(response_words)
      //console.log(response_words.length)
      if(flag) {
        flag_message = 'You need to use at least 3 words to make a sentence.'
      }
      //else {
        //check if a verb is used
        //flag = (response_words.includes("tegud") || response_words.includes("velmik")) ? true: false;
        //console.log(response_words.includes("tegud"||"velmik"))
        //flag_message = 'Check your sentence again; you need to include a description of the action.'
      //}
      if (flag){
          //console.log("there is a flag")
          document.getElementById('correct_production').innerHTML = flag_message ;
          document.getElementById('correct_production').style.visibility = "visible";
          document.getElementById('correct_production').style.color = '#b80F0A';
      }

      else {
          // disable all the buttons after a response
          e.preventDefault();
          document.getElementById('reset').setAttribute('disabled', 'disabled');
          document.getElementById('submit').setAttribute('disabled', 'disabled');

          // fix up the response sentence
          response.words = response_words.filter(word => word != '');
          response.particle = response.words[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
          response.sentence = response_words.join(' ');
          //get the buttons
          var btns = document.querySelectorAll('.button-option');

          //set a lag time
          var lag_time = 1000
          if (trial.feedback) {
            // check if response was correct, and whether correct choice was first or second button
            response_correct = (response.particle==correct_sentence_list[0]) ? true : false;
            correct_first = (correct_sentence_list[0]==trial.words[0]) ? true : false;
            // if correct, display correct choice button in green
            if (response_correct) {
              lag_time += 300
              if (correct_first){
                btns[0].style.borderColor='#50C878';
                btns[0].style.borderWidth='3pt';
              }
              else {
                btns[1].style.borderColor='#50C878';
                btns[1].style.borderWidth='3pt';
              }
            }
            // if incorrect, display correct choice button in green and choice button in red
            else {
              lag_time += 1000
              if (correct_first){
                btns[0].style.borderColor='#50C878';
                btns[0].style.borderWidth='3pt';
                btns[1].style.borderColor='#B80F0A';
                btns[1].style.borderWidth='3pt';
              }
              else {
                btns[1].style.borderColor='#50C878';
                btns[1].style.borderWidth='3pt';
                btns[0].style.borderColor='#B80F0A';
                btns[0].style.borderWidth='3pt';
              }

            }
          }
          // disable buttons after choice
          for (var i=0; i < trial.words.length; i++ ){
              btns[i].setAttribute('disabled', 'disabled');
          }
          // measure rt
          var end_time = performance.now();
          var rt = end_time - start_time;
          response.rt = rt;

          // wait to make sure button feedback has occurred for lag time specified
          setTimeout(function(){
            if (trial.response_ends_trial) {
              end_trial();
            }
          }, lag_time);
        }

    })

    // function to end trial when it is time
    function end_trial() {

      // unsubscribe all handlers
      $(document).off("keydown")

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "response_sentence": response.sentence,
        "response_words": response.words,
      };



      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };



    // hide image if timing is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-button-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if time limit is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
