
// generate subject ID

var subject_id = Math.floor(Math.random()*1000);

var condition_assignment = [];

//console.log(jsPsych.data.get().csv());



// adding img path to nouns
nouns.forEach(function(element){
	var new_image_name = element.img
	element.img = "./Images/"+new_image_name
});

// adding audio path

sentences_redundant_exp_comp.forEach(function(element){
	var audio_affix = ".mp3"
	var audio_name = element.Audio
	element.Audio = "./Audio/"+audio_name+audio_affix
});

sentences_redundant_production.forEach(function(element){
	var audio_affix = ".mp3"
	var audio_name = element.Audio
	element.Audio = "./Audio/"+audio_name+audio_affix
});

sentences_informative_exp_comp.forEach(function(element){
	var audio_affix = ".mp3"
	var audio_name = element.Audio
	element.Audio = "./Audio/"+audio_name+audio_affix
});

sentences_informative_production.forEach(function(element){
	var audio_affix = ".mp3"
	var audio_name = element.Audio
	element.Audio = "./Audio/"+audio_name+audio_affix
});


//testing code: console.table(nouns_nocase)

//flipping sentences_redundant_exposure
sentences_redundant_exp_comp.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img1 + selected_affix
	element.Img1 = "./Images/"+new_image_name+".jpg"
});

//flipping sentences_redundant_comp img2
sentences_redundant_exp_comp.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img2 + selected_affix
	element.Img2 = "./Images/"+new_image_name+".jpg"
});


//flipping sentences_redundant_test
sentences_redundant_production.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img + selected_affix
	element.Img = "./Images/"+new_image_name+".jpg"
});

//flipping sentences_informative_exposure
sentences_informative_exp_comp.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img1 + selected_affix
	element.Img1 = "./Images/"+new_image_name+".jpg"
});


//flipping sentences_redundant_comp img2
sentences_informative_exp_comp.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img2 + selected_affix
	element.Img2 = "./Images/"+new_image_name+".jpg"
});

//flipping sentences_informative_test
sentences_informative_production.forEach(function(element){
	var image_affixes = ["", "_r"]
	var selected_affix = jsPsych.randomization.shuffle(image_affixes)[0]
	var new_image_name = element.Img + selected_affix
	element.Img = "./Images/"+new_image_name+".jpg"
});

//aliens img path
sentences_redundant_exp_comp.forEach(function(element){
 	var new_image_name = "./Images/"+element.Alien+".jpg"
	element.Alien = new_image_name
});

sentences_informative_exp_comp.forEach(function(element){
	var new_image_name = "./Images/"+element.Alien+".jpg"
	element.Alien = new_image_name
});

//preload audio

var preload = {
    type: 'preload',
    audio: audio,
};

//instruction trials

var consent_form = {
	type: "html-button-response",
	stimulus: ' <strong>Informed Consent Form</strong><br><br> This is an experiment about language learning. It will take about 35-40 minutes to complete, and you will be compensated by the amount indicated on Prolific.<br>It is being conducted by Lauren Fletcher, with Drs Jennifer Culbertson & Hugh Rabagliati at the University of Edinburgh. <br> Please <a href="https://atypicaluniversals.inf.ed.ac.uk/consent_info.pdf" target=\\"_blank\\">click here</a> to read an information letter (pdf) about the study. <br><br> By agreeing below you indicate that: <br>-You are at least 18 years old.<br>-You are a native speaker of English.<br>-You have read the information letter.<br>-You voluntarily agree to participate, and understand you can stop your participation at any point.<br>-You agree that your anonymous data may be kept permanently by the researchers and may be used for research purposes.',
	choices: ['Continue'],
};

//autistic verification for aut studies

var autistic_verification = {
	type: "html-button-response",
	stimulus: "Have you received a formal clinical diagnosis of autism spectrum disorder, made by a psychiatrist, psychologist, or other qualified medical specialist? This includes Asperger's syndrome, Autism Disorder, High Functioning Autism or Pervasive Developmental Disorder</br>",
	choices: ['Yes - as a child', 'Yes - as an adult', 'I am in the processs of receiving a diagnosis', 'No - but I identify as being on the autism spectrum', 'No', "Don't know/Prefer not to say"],
	data: {
	  task: 'autisim_verification',
	},
	on_finish: function(data) {
	  if(data.response == 4 || data.response == 5) {
		data.correct = true;
	  } else {
		data.correct = false;
	  }
	  console.log(data.response)
	},
  };  

  var loop_autism = {
	type: "html-button-response",
	choices: function(){
	  last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
	  console.log(last_trial_correct)
	  if (last_trial_correct) {
		  return choices = ['Next']
	  } else {
		return choices = ['Please click here to be redirected to Prolific. Please return the study at your earliest convenience.']
	  }
	},
	stimulus: '',
	prompt: function(){
	  last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
	  if (last_trial_correct) {
		var html = `<p> You have passed the screening criteria and will proceed with the rest of the study.</p>`
		return html;
	  } else {
		var html = `<p> You have not passed the screening criteria.</p>`
		return html;
	  }
	},
	on_start: function(trial){
		trial.data = {last_trial_correct:jsPsych.data.get().last(1).values()[0].correct, task: 'autism-loop'}
		console.log(trial.data.last_trial_correct)
	},
	on_finish: function(data){
		if(data.last_trial_correct == false) {
			console.log(data.last_trial_correct)
			jsPsych.endExperiment();
		} else {
			data.last_trial_correct = true;
		}
	}
  };
  
  var loop_autism_timeline = {
	timeline: [autistic_verification, loop_autism],
	loop_function: function(data) {
	console.log(data.last_trial_correct)
	  if(last_trial_correct = true) {
		return false;
	  } else {
		return true;
	  }
	}
  };

var instructions_main = {
	//present instructions
	type: 'instructions',
	pages: ['You are part of a mission to an alien planet. There are two groups of aliens living on the planet; the blue and orange aliens (pictured below). </br><img src="https://atypicaluniversals.inf.ed.ac.uk/Images/both_aliens.jpg"></img></br>You will be learning the language of the aliens as part of the process of forming trade relations with the aliens. The language used by the two groups is slightly different.</br> We are keen to trade with both groups of the aliens. They seem to be on our side, and they have important resources. You should try to impress them.',],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_noun_exp = {
	type: 'instructions',
	pages: ['First, you are going to learn some of the words that the aliens use in their language. Both groups of aliens use the same words. </br> You will now be shown a picture and the word that describes it. Please press next when you are confident that you know the meaning of the word, to move to the next word.',],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_noun_comp = {
	type: 'instructions',
	pages: ['Now, you are going to be tested on your ability to understand the words in the alien language. You will be shown a set of pictures, as well as one of the words you saw before. </br> Please click on the picture that corresponds to the word.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_noun_prod = {
	type: 'instructions',
	pages: ['Now, you are going to be tested on your ability to name pictures in the alien language. You are going to be shown one picture, and given the selection of all the words used by the groups of aliens. </br> Please click on the word that describes the picture.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_sentence_exp = {
	type: 'instructions',
	pages: ['In the next part of the study, you are going to be learning the grammar of the language the aliens use. The two groups of aliens have slightly different grammars, so the sentences that they use will be different. You will be shown a picture and a sentence that describes it. The alien that uses the sentence will be shown on the screen. </br> Please press next when you are confident to move to the next sentence.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_sentence_comp = {
	type: 'instructions',
	pages: ['Next, we are going to test your understanding of the language. You will see two pictures and a sentence spoken by one of the aliens that describes one of the pictures. </br> Please choose the picture that corresponds to the sentence by clicking on the picture.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_sentence_prod = {
	type: 'instructions',
	pages: ['Finally, we are going to test your ability to speak this alien language. </br> Please click the words in order to create a sentence that describes the picture. </br> You are able to reset your sentence by clicking "reset".'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};

var instructions_post_debrief = {
	type: 'instructions',
	pages: ['Great work!<br>Now, we are going to ask a few questions about your experiences in everyday life and your language experience.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};


var instructions_post_AQ = {
	type: 'instructions',
	pages: ['Thank you for your answers. Please click "next" below to save your data; there may be a short delay before the experiment progresses to the final page, which will redirect you back to Prolific. Please do not close the page during this delay.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};


var end_card = {
  type: 'instructions',
  pages: ['Thank you for participating in this study!', 'Please make sure you click the button below, rather than closing the page. You will be automatically returned to Prolific.'],
	show_clickable_nav: true,
    button_label_next: 'Next'
};


//noun exposure, comprehension and production for both conditions

//noun exposure: shown a noun and image

var noun_exposure = {
	timeline: [
		{
			type:'audio-button-response',
			stimulus: jsPsych.timelineVariable('audio'),
			prompt: function (){
				var html = "<div class=wrapper></br><img src=" + jsPsych.timelineVariable('img') + " border=2px solid border-color= #000000 width=300 height=300 /></br>" + jsPsych.timelineVariable('noun');
				return html;
			},
			choices: ['Next'],
			trial_duration: 100000000000000,
			response_allowed_while_playing: false,
		},
	],
	timeline_variables: nouns,
	repetitions: 2,
};



// shown all images and pick correct image for presented noun
var noun_comprehension = {
	type: 'audio-button-response',
	timeline: [
		{stimulus: jsPsych.timelineVariable('audio'),
		prompt: jsPsych.timelineVariable('noun'),
		button_html: '<button class="jspsych-btn"><img src=%choice% style="width:300px;height:300px"></button>',
		choices: ['./Images/chef.jpg', './Images/burglar.jpg', './Images/clown.jpg', './Images/police.jpg'],
		trial_duration: 100000000000000,
		response_allowed_while_playing: false, // commented out for testing as audio does not play on a local chrome environment
		//trial_ends_after_audio: false,
		on_start: function(trial) {
			var shuffled_labels = jsPsych.randomization.shuffle(['./Images/chef.jpg', './Images/burglar.jpg', './Images/clown.jpg', './Images/police.jpg']);
			trial.choices = shuffled_labels;
			trial.data = {correct_answer:jsPsych.timelineVariable('img'), task:'noun-comprehension', label_choices:shuffled_labels};
		},
		on_finish: function(data) {
			var button_number = data.response;
			data.label_selected = data.label_choices[button_number];
			if(data.label_selected == jsPsych.timelineVariable('img')) {
				data.correct = true;
			} else {
				data.correct = false;
			}
		},
		},
		{stimulus: './Audio/Silence.mp3',
		prompt: jsPsych.timelineVariable('noun'),
		choices: [],
		button_html: ['<button class="jspsych-btn disabled"><img src=%choice% style="width:400px;height:300px"></button>', '<button class="jspsych-btn disabled"><img src=%choice% style="width:400px;height:300px"></button>','<button class="jspsych-btn disabled"><img src=%choice% style="width:400px;height:300px"></button>','<button class="jspsych-btn disabled"><img src=%choice% style="width:400px;height:300px"></button>'],
		response_allowed_while_playing: false,
		trial_ends_after_audio: true,
		response_ends_trial: false,
		on_start: function(trial) {
			trial.data = {task:'noun-comprehension-feedback'};
			var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
			var last_trial_choices = [];
			var last_trial_choices = jsPsych.data.get().last(1).values()[0].label_choices;
			var last_trial_response = jsPsych.data.get().last(1).values()[0].response;
			var last_trial_correct_choice = jsPsych.data.get().last(1).values()[0].correct_answer;
			var correct_choice_index = (last_trial_choices.indexOf(last_trial_correct_choice));
			//console.log(correct_choice_index);
			//console.log(last_trial_correct_choice);
			//console.log(last_trial_response);
			//console.log(last_trial_choices);
			trial.choices = last_trial_choices;
			if (last_trial_correct) {
				var correct_button_html = '<button class="jspsych-btn disabled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
				trial.button_html[last_trial_response] = correct_button_html;
				trial.trial_duration = 2500;
			} else {
				var wrong_button_html = '<button class="jspsych-btn disabled"><img src=%choice% style="border: 5px solid; border-color: red; width:400px;height:300px"></button>';
				var correct_button_html = '<button class="jspsych-btn disabled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
				trial.button_html[last_trial_response] = wrong_button_html;
				trial.button_html[correct_choice_index] = correct_button_html;
				trial.trial_duration = 5000;
			}
		},
		},
	],
	timeline_variables: nouns,
	randomize_order: true,
	repetitions: 2};

//given choice of all the words and pick the one for the image presented

var noun_production = {
	type: 'html-button-response',
	timeline: [
	{
		prompt: function() {
      var html = "<div class=wrapper></br><img src=" + jsPsych.timelineVariable('img') + " border=2px solid border-color= #000000 width=300 height=300 /></br>"
      return html;
    },
		stimulus: "Pick the word that corresponds to the picture.",
		choices: ['barsa', 'peza', 'rizba', 'koofta'],
		data: {
			task: 'noun_production'
		},
		trial_duration: 100000000000000,
		on_start: function(trial) {
			var shuffled_labels = jsPsych.randomization.shuffle(['barsa', 'peza', 'rizba', 'koofta'])
			trial.choices = shuffled_labels
			trial.data = {correct_answer:jsPsych.timelineVariable('noun'), task:'noun-production', label_choices:shuffled_labels}
		},
		on_finish: function(data) {
			var button_number = data.response;
			data.label_selected = data.label_choices[button_number];
			if(data.label_selected == jsPsych.timelineVariable('noun')) {
				data.correct = true;
			} else {
				data.correct = false;
			}
		},
	},
	{
		prompt: function() {
      var html = "<div class=wrapper></br><img src=" + jsPsych.timelineVariable('img') + " border=2px solid border-color= #000000 width=300 height=300 /></br>"
      return html;
    },
		button_html: ['<button class="jspsych-btn disabled">%choice%</button>', '<button class="jspsych-btn disabled">%choice%</button>','<button class="jspsych-btn disabled">%choice%</button>','<button class="jspsych-btn disabled">%choice%</button>',],
		stimulus: "Pick the word that corresponds to the picture.",
		trial_duration: 5000,
		choices: ['barsa', 'peza', 'rizba', 'koofta'],
		response_ends_trial: false,
		on_start: function(trial) {
			trial.data = {task:'noun-production-feedback'}
			var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
			var last_trial_choices = [];
			var last_trial_choices = jsPsych.data.get().last(1).values()[0].label_choices;
			var last_trial_response = jsPsych.data.get().last(1).values()[0].response;
			var last_trial_correct_choice = jsPsych.data.get().last(1).values()[0].correct_answer;
			var correct_choice_index = (last_trial_choices.indexOf(last_trial_correct_choice));
			//console.log(correct_choice_index);
			//console.log(last_trial_correct);
			//console.log(last_trial_response);
			//console.log(last_trial_choices);
			trial.choices = last_trial_choices;
			if (last_trial_correct) {
				var correct_button_html = '<button class="jspsych-btn disabled" style="border: 5px solid; border-color: green;">%choice%</button>';
				trial.button_html[last_trial_response] = correct_button_html;
				trial.trial_duration = 1500;
			} else {
				var wrong_button_html = '<button class="jspsych-btn disabled" style="border: 5px solid; border-color: red;">%choice%</button>';
				var correct_button_html = '<button class="jspsych-btn disabled" style="border: 5px solid; border-color: green;">%choice%</button>';
				trial.button_html[last_trial_response] = wrong_button_html;
				trial.button_html[correct_choice_index] = correct_button_html;
				trial.trial_duration = 2500;
			}
		}
	}
	],
	timeline_variables: nouns,
	//randomise
	randomize_order: true,
	repetitions: 2
};

var loop_notif = {
	type: 'html-button-response',
	choices: ['Next'],
	stimulus: ' ',
	prompt: function() {
		var noun_prod_trials = jsPsych.data.getLastTimelineData().filter({task:'noun-production'});
		var correct_trials = noun_prod_trials.filter({correct: true});
		prod_accuracy = Math.round(correct_trials.count()/noun_prod_trials.count()*100);
		//console.log(accuracy);
		//var data_to_display = jsPsych.data.get();
		//console.log(data_to_display.csv());
		if(prod_accuracy >=80){
	  	var html = `<p>You got the right answer on ` + prod_accuracy + `%  of the trials. Well done! Press the next button to proceed to the next part of the study.</p>`;
			return html;
		} else {
			var html =  `<p>You got the right answer on ` + prod_accuracy +`%  of the trials. You need a higher score to make sure that you can understand the aliens in the next part of the study. Please press the next button to return to learning the words of the alien language.</p>`;
			return html;
		}
	}
};

var noun_production_loop = {
	timeline: [instructions_noun_exp, noun_exposure, instructions_noun_comp, noun_comprehension, instructions_noun_prod, noun_production, loop_notif],
	loop_function: function(data) {
		 //accuracy % of the noun production trials
		//data.accuracy = accuracy;
		//var data_to_display = jsPsych.data.get();
		//console.log(data_to_display.csv());
		if(prod_accuracy >= 80){
			return false; //if above 80% don't run the trial again
		} else {
			return true; // if below 80% run the noun block again
		}
	},
};



// sentence trials for redundant condition

//show sentences and click next


var sentence_exposure_redundant =  {
	timeline : [
	{
		type: 'audio-button-response',
		stimulus: jsPsych.timelineVariable('Audio'),
		prompt: function (){
			var html = "<div class=wrapper></br><img src=" + jsPsych.timelineVariable('Img1') + " border=2px solid border-color= #000000 width=400 height=300 /></br>" + jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-150px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200 height=200/></div>";
			return html;
		},
		choices: ['Next'],
		trial_duration: 100000000000000,
		response_allowed_while_playing: false,
		trial_ends_after_audio: false,
	},
	],
	timeline_variables: sentences_redundant_exp_comp,
	//randomise
	randomize_order: true,
	repetitions: 2
};

//given one sentence with fixed SOV word order; pick the appropriate image; feedback on choice given
	var sentence_comprehension_redundant = {
		type: 'audio-button-response',
		timeline: [
			{stimulus: jsPsych.timelineVariable('Audio'),
			prompt: function(){
				var html = jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-10px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200 height=200/></div>";
				return html;
			},
			button_html: "<img src=%choice% style='border: 2px solid; border-color: black; width:400px;height:300px' /></b>",
			choices: [jsPsych.timelineVariable('Img1'), jsPsych.timelineVariable('Img2')],
			trial_duration: 100000000000000,
			response_allowed_while_playing: false,
			trial_ends_after_audio: false,
			on_start: function(trial) {
				var shuffled_labels = jsPsych.randomization.shuffle([jsPsych.timelineVariable('Img1'), jsPsych.timelineVariable('Img2')])
				trial.choices = shuffled_labels;
				trial.data = {correct_answer:jsPsych.timelineVariable('Img1'), task:'sentence-comprehension-redundant', label_choices:shuffled_labels}
			},
			on_finish: function(data) {
				var button_number = data.response;
				data.label_selected = data.label_choices[button_number];
				if(data.label_selected == jsPsych.timelineVariable('Img1')) {
					data.correct = true;
				} else {
					data.correct = false;
				}
			},
		},
		{stimulus: './Audio/Silence.mp3',
		prompt: function(){
			var html = jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-10px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200 height=200/></div>";
			return html;
		},
		choices: [],
		button_html: ['<button class="disabled"><img src=%choice% style="border: 2px solid; border-color: black;width:400px;height:300px"></button>', '<button class="disabled"><img src=%choice% style="border: 2px solid; border-color: black;width:400px;height:300px"></button>'],
		response_allowed_while_playing: false,
		trial_ends_after_audio: true,
		response_ends_trial: false,
		on_start: function(trial) {
			trial.data = {task:'sentence-comprehension-redundant-feedback'};
			var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
			var last_trial_choices = [];
			var last_trial_choices = jsPsych.data.get().last(1).values()[0].label_choices;
			var last_trial_response = jsPsych.data.get().last(1).values()[0].response;
			var last_trial_correct_choice = jsPsych.data.get().last(1).values()[0].correct_answer;
			var correct_choice_index = (last_trial_choices.indexOf(last_trial_correct_choice));
			//console.log(correct_choice_index);
			//console.log(last_trial_correct_choice);
			//console.log(last_trial_response);
			//console.log(last_trial_choices);
			trial.choices = last_trial_choices;
			if (last_trial_correct) {
				var correct_button_html = '<button class="disabled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
				trial.button_html[last_trial_response] = correct_button_html;
				trial.trial_duration = 2500;
			} else {
				var wrong_button_html = '<button class="disabled"><img src=%choice% style="border: 5px solid; border-color: red; width:400px;height:300px"></button>';
				var correct_button_html = '<button class="disabled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
				trial.button_html[last_trial_response] = wrong_button_html;
				trial.button_html[correct_choice_index] = correct_button_html;
				trial.trial_duration = 5000;
			}
		},
		},
		],
		timeline_variables: sentences_redundant_exp_comp,
		//randomise
		randomize_order: true,
		repetitions: 2};


//given the bag of words to create sentence to describe the given image

var sentence_production_redundant = {
	timeline: [
	{
		type: 'bag_of_words',
		stimulus: jsPsych.timelineVariable('Img'),
		prompt: "Click the words in order to make a sentence",
		words: ["peza","rizba", "barsa", "di", "koofta", "tegud", "velmik"],
    on_start: function(trial) {
			var shuffled_labels2 = jsPsych.randomization.shuffle(["peza","rizba", "barsa", "di", "koofta", "tegud", "velmik"])
			trial.words = shuffled_labels2
		},
	},
	],
	timeline_variables: sentences_redundant_production,
	randomize_order: true,
	repetitions: 1
};

//sentence trials for informative condition

//show sentences and click next

var sentence_exposure_informative =  {
	timeline : [
	{
		type: 'audio-button-response',
		stimulus: jsPsych.timelineVariable('Audio'),
		prompt: function (){
			var html = "<div class=wrapper></br><img src=" + jsPsych.timelineVariable('Img1') + " border=2px solid border-color= #000000 width=400 height=300 /></br>" + jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-150px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200 height=200/></div>";
			return html;
		},
		choices: ['Next'],
		data :{
			type: jsPsych.timelineVariable('type')
		},
		response_allowed_while_playing: false,
		trial_ends_after_audio: false,
		trial_duration: 100000000000000,
	},
	],
	timeline_variables: sentences_informative_exp_comp,
	//randomise
	randomize_order: true,
	repetitions: 2
};

//given 1 complete sentence, pick the appropriate image
var sentence_comprehension_informative = {
	type: 'audio-button-response',
	timeline: [
		{stimulus: jsPsych.timelineVariable('Audio'),
		prompt: function(){
			var html = jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-10px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200 height=200/></div>";
			return html;
		},
		button_html: "<img src=%choice% style='border=2px solid border-color= #000000 width = 300px height = 300px' /></b>",
		choices: [jsPsych.timelineVariable('Img1'), jsPsych.timelineVariable('Img2')],
		trial_duration: 100000000000000,
		response_allowed_while_playing: false,
		trial_ends_after_audio: false,
		on_start: function(trial) {
			var shuffled_labels = jsPsych.randomization.shuffle([jsPsych.timelineVariable('Img1'), jsPsych.timelineVariable('Img2')])
			trial.choices = shuffled_labels;
			trial.data = {correct_answer:jsPsych.timelineVariable('Img1'), task:'sentence-comprehension-informative', label_choices:shuffled_labels}
		},
		on_finish: function(data) {
			var button_number = data.response;
			data.label_selected = data.label_choices[button_number];
			if(data.label_selected == jsPsych.timelineVariable('Img1')) {
				data.correct = true;
			} else {
				data.correct = false;
			}
		},
	},
	{stimulus: './Audio/Silence.mp3',
	prompt: function(){
		var html = jsPsych.timelineVariable('alien_lang') + "<div style = 'position:relative; left: -255px; top:-10px;'><img src="+jsPsych.timelineVariable('Alien') + " width=200px height=200px/></div>";
		return html;
	},
	choices: [],
	button_html: ['<button class="disabled"><img src=%choice% style="width:400px;height:300px"></button>', '<button class="disabled"><img src=%choice% style="width:400px;height:300px"></button>'],
	response_allowed_while_playing: false,
	trial_ends_after_audio: true,
	response_ends_trial: false,
	on_start: function(trial) {
		trial.data = {task:'sentence-comprehension-informative-feedback'};
		var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
		var last_trial_choices = [];
		var last_trial_choices = jsPsych.data.get().last(1).values()[0].label_choices;
		var last_trial_response = jsPsych.data.get().last(1).values()[0].response;
		var last_trial_correct_choice = jsPsych.data.get().last(1).values()[0].correct_answer;
		var correct_choice_index = (last_trial_choices.indexOf(last_trial_correct_choice));
		//console.log(correct_choice_index);
		//console.log(last_trial_correct_choice);
		//console.log(last_trial_response);
		//console.log(last_trial_choices);
		trial.choices = last_trial_choices;
		if (last_trial_correct) {
			var correct_button_html = '<button class="disasbled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
			trial.button_html[last_trial_response] = correct_button_html;
			trial.trial_duration = 2500;
		} else {
			var wrong_button_html = '<button class="disabled"><img src=%choice% style="border: 5px solid; border-color: red; width:400px;height:300px"></button>';
			var correct_button_html = '<button class="disabled"><img src=%choice% style="border: 5px solid; border-color: green; width:400px;height:300px"></button>';
			trial.button_html[last_trial_response] = wrong_button_html;
			trial.button_html[correct_choice_index] = correct_button_html;
			trial.trial_duration = 5000;
		}
	},
	},
	],
	timeline_variables: sentences_informative_exp_comp,
	//randomise
	randomize_order: true,
	repetitions: 2};



//given the bag of words to create sentence to describe the given image

var sentence_production_informative = {
	timeline: [
	{
		type: 'bag_of_words',
		stimulus: jsPsych.timelineVariable('Img'),
		prompt: "Click the words in order to make a sentence",
		words: ["peza","rizba", "barsa", "di", "koofta", "tegud", "velmik"],
		on_start: function(trial) {
			var shuffled_labels2 = jsPsych.randomization.shuffle(["peza","rizba", "barsa", "di", "koofta", "tegud", "velmik"])
			trial.words = shuffled_labels2
		},
		data: {
			type: jsPsych.timelineVariable('type'),
			task: 'sentence_production',
		},
	},
	],
	timeline_variables: sentences_informative_production,
	randomize_order: true,
	repetitions: 1
};


var aq_10 = {
	timeline: [
		{
		type: 'survey-likert',
		questions: [
			{prompt: jsPsych.timelineVariable('prompt'),
			labels: likert_scale,
			required: true},
			],
		data: {
			label: jsPsych.timelineVariable('name'),
		task: 'AQ_10'},
		},
	],
	randomize_order: false,
	timeline_variables: aq_10_questions,
};

var post_language_questions = {
	timeline: [
		{
			type: 'survey-text',
			questions: [
				{prompt: jsPsych.timelineVariable('prompt'),
				required: true},
			],
		data: {
			label: jsPsych.timelineVariable('name'),
		task: 'language_questions'},
		},
	],
	randomize_order: false,
	timeline_variables: language_questions
};

var post_language_questions_multi_choice = {
	timeline: [
		{
		type: 'survey-multi-choice',
		questions: [
			{prompt: jsPsych.timelineVariable('prompt'),
			options: ['Yes', 'No'],
			required: true},
			],
		data: {label: jsPsych.timelineVariable('name'),
	task: 'language_questions_cont'},
		},
	],
	randomize_order: false,
	timeline_variables: language_questions_multi_choice
};

var pilot_questions = {
	timeline: [
		{
		type: 'survey-text',
		questions: [
			{prompt: jsPsych.timelineVariable('prompt'),
			required: true},
			],
		data: {label: jsPsych.timelineVariable('name'),
	task: 'pilot_questions'},
		},
	],
	randomize_order: false,
	timeline_variables: pilot_question_set,
};



// save data function

var SaveData_Function = function SaveData(name, data_in){
  jsPsych.pauseExperiment();
  var url = 'save_data.php';
  var data_to_send = {filename: name, filedata: data_in};
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(data_to_send),
      headers: new Headers({
              'Content-Type': 'application/json'
      })
  }).then(function(response) { jsPsych.resumeExperiment(); });
};
// timeline initiation

var experiment_data = jsPsych.data.get();

var save_data = {
        type: 'call-function',
        func: function () { SaveData_Function(condition_assignment+"_"+subject_id+"_socialbiases.csv", jsPsych.data.get().csv()); }
};

//generate the 2 timelines for the 2 conditions

var timeline = [];


var condition_redundant = [consent_form, preload, instructions_main, noun_production_loop, loop_notif, instructions_sentence_exp, sentence_exposure_redundant, instructions_sentence_comp, sentence_comprehension_redundant, instructions_sentence_prod, sentence_production_redundant, instructions_post_debrief, aq_10, post_language_questions, post_language_questions_multi_choice, instructions_post_AQ, save_data, end_card];

var condition_informative = [consent_form, preload, instructions_main, noun_production_loop, loop_notif, instructions_sentence_exp, sentence_exposure_informative, instructions_sentence_comp, sentence_comprehension_informative, instructions_sentence_prod, sentence_production_informative, instructions_post_debrief, aq_10, post_language_questions, post_language_questions_multi_choice, instructions_post_AQ, save_data, end_card];

//generate condition number

//if(subject_id%2 == 0){
	//timeline = timeline.concat(condition_redundant);
	//condition_assignment = "fixed_word_order";
//}
//else {
	//timeline = timeline.concat(condition_informative);
	//condition_assignment = "flexible_word_order";
//};

//console.log(condition_assignment)

condition_assignment = 'flexible_word_order';

// capture info from Prolific
var prolific_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');

// add participant and session info to data

jsPsych.data.addProperties({
	subject_id: subject_id,
	condition: 'flexible_word_order',
	prolific_id: prolific_id,
	study_id: study_id,
	session_id: session_id
});

jsPsych.init({
    timeline: [consent_form, loop_autism_timeline, preload, instructions_main, noun_production_loop, loop_notif, instructions_sentence_exp, sentence_exposure_informative, instructions_sentence_comp, sentence_comprehension_informative, instructions_sentence_prod, sentence_production_informative, instructions_post_debrief, aq_10, post_language_questions, post_language_questions_multi_choice, instructions_post_AQ, save_data, end_card],
		on_finish: function() {
		if (jsPsych.data.get().last(1).values()[0].task == 'autism-loop') {
			jsPsych.endExperiment();
			window.location = "https://app.prolific.co/submissions/complete?cc=CHL9KD1X";
		} else {
			jsPsych.endExperiment();
			window.location = 'https://app.prolific.co/submissions/complete?cc=47AE004D';}
		},
});
