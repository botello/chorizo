'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * ChallengeSchema
 */
var ChallengeSchema = new Schema({
  created     : { type: Date, default: Date.now },
  name        : { type: String, trim: true, default: '', required: 'Name cannot be blank' },
  description : { type: String, trim: true, default: '' },
  image       : { type: String, trim: true, default: 'challenge.default' },
  template    : { type: String, trim: true, default: 'challenge.default' },
  question    : { type: String, trim: false, required: '' }
});

/**
 * QuizSchema
 */
var QuizSchema = new Schema({
  created     : { type: Date, default: Date.now },
  updated     : { type: Date },
  name        : { type: String, trim: true, default: '', required: 'Name cannot be blank' },
  description : { type: String, trim: true, default: '' },
  image       : { type: String, trim: true, default: 'quiz.default' },
  challenges  : [ ChallengeSchema ]
});

/**
 * Level Schema
 */
var LevelSchema = new Schema({
  created     : { type: Date, default: Date.now },
  updated     : { type: Date },
  name        : { type: String, trim: true, default: '', required: 'Name cannot be blank' },
  description : { type: String, trim: true, default: '' },
  image       : { type: String, trim: true, default: 'level.default' },
  quizzes     : [ QuizSchema ]
});

/**
 * World Schema
 */
var WorldSchema = new Schema({
  created     : { type: Date, default: Date.now },
  updated     : { type: Date },
  name        : { type: String, trim: true, default: '', required: 'Name cannot be blank' },
  description : { type: String, trim: true, default: '' },
  image       : { type: String, trim: true, default: 'world.default' },
  levels      : [ LevelSchema ]
});

mongoose.model('World', WorldSchema);
