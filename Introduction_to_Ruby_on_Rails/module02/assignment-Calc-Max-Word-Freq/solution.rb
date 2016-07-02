# Project 1 executed by; MWANIA Musembi Joseph
# Assignment: Calculating Max Word Frequency
# Specialization Certification of "Ruby on Rails Web Development"
# Course 1; "Ruby on Rails: An Introduction"
# Institution: Johns Hopkins University 
# Platform: Coursera

#Implementing LineAnalyzer class.
class LineAnalyzer

=begin
   Implementing reader attributes in LineAnalyzer class as follows;
 
   highest_wf_count - a number with maximum number of occurrences for a single word
   highest_wf_words - an array of words with the maximum number of occurrences 
   content,         - the string analyzed 
   line_number      - the line number analyzed 
=end

  attr_reader :highest_wf_count
  attr_reader :highest_wf_words
  attr_reader :content
  attr_reader :line_number

=begin
   Adding functions / methods in LineAnalyzer.
   initialize() - taking a line of text (content) and a line number
   calculate_word_frequency() - calculates result

   Implement the initialize() method to:
   take in a line of text and line number
   initialize the content and line_number attributes
   call the calculate_word_frequency() method.
=end

  def initialize(content, line_number)
    @content = content
    @line_number = line_number
    calculate_word_frequency
  end

=begin
  Implement the calculate_word_frequency() method to:
  calculate the maximum number of times a single word appears within
  provided content and store that in the highest_wf_count attribute.
  identify the words that were used the maximum number of times and
  store that in the highest_wf_words attribute.
=end

  def calculate_word_frequency
    @highest_wf_count = 0
    @highest_wf_words = []
    temp_words = {}
    mcontent = @content.downcase.split
    mcontent.each do |word|
      temp_words[word] = mcontent.count(word)
    end
    @highest_wf_count = temp_words.values.max
    if temp_words.values.count(@highest_wf_count) == temp_words.values.length
      @highest_wf_words.concat(temp_words.keys)
    elsif temp_words.values.count(@highest_wf_count) != 1
      index = 0
      temp_words.values.each do |hf|
        if hf == @highest_wf_count
          @highest_wf_words << temp_words.keys[index]
        end
        index += 1
      end
    else
      index = temp_words.values.index(@highest_wf_count)
      @highest_wf_words << temp_words.keys[index]
    end
  end
end

#  Implementing a class called Solution. 
class Solution

  # Implement the following read-only attributes in the Solution class.
  # highest_count_across_lines - a number with the value of the highest frequency of a word
  # highest_count_words_across_lines - an array with the words with the highest frequency
  attr_reader :analyzers
  attr_reader :highest_count_across_lines
  attr_reader :highest_count_words_across_lines

=begin 
   Implement the following methods in the Solution class.
   analyze_file() - processes 'test.txt' intro an array of LineAnalyzers
   calculate_line_with_highest_frequency() - determines which line of
   text has the highest number of occurrence of a single word
   print_highest_word_frequency_across_lines() - prints the words with the 
   highest number of occurrences and their count
=end

  def initialize
    @analyzers = []
  end

=begin
   Implement the analyze_file() method() to:
   Read the 'test.txt' file in lines 
   Create an array of LineAnalyzers for each line in the file
=end

  def analyze_file
    line_number = 1
    if File.exist?('test.txt')
      file = File.open("test.txt", "r") do |f|  # Calling test.txt (read only) and loop thro' lines.
        f.each_line do |line|
          @analyzers << LineAnalyzer.new(line, line_number)
          line_number += 1
        end
      end
    end
  end

=begin
   Implement the calculate_line_with_highest_frequency() method to:
   calculate the highest number of occurences of a word across all lines
   and stores this result in the highest_count_across_lines attribute.
   identifies the words that were used with the highest number of occurrences
   and stores them in print_highest_word_frequency_across_lines.
=end

  def calculate_line_with_highest_frequency
    temp_array = []
    @highest_count_words_across_lines = []
    @analyzers.each do |obj|
      temp_array << obj.highest_wf_count
    end
    @highest_count_across_lines = temp_array.max

    @analyzers.each do |obj|
      if obj.highest_wf_count == @highest_count_across_lines
        @highest_count_words_across_lines << obj
      end
    end
  end

=begin
  Implement the print_highest_word_frequency_across_lines() 
  method to print the result in the following format
=end

  def print_highest_word_frequency_across_lines
    @highest_count_words_across_lines.each do |obj|
      puts "#{obj.highest_wf_words} (appears in line #{obj.line_number})"
    end
  end
end