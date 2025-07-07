"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const QUOTE_DATABASE = {
  motivation: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun"
  ],
  happiness: [
    "Happiness is when what you think, say, and do are in harmony. - Mahatma Gandhi",
    "The secret of happiness is freedom. - Thucydides",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson"
  ],
  success: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill"
  ],
  love: [
    "Where there is love there is life. - Mahatma Gandhi",
    "Love is composed of a single soul inhabiting two bodies. - Aristotle",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "We are most alive when we're in love. - John Updike"
  ],
  money: [
    "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver. - Ayn Rand",
    "It's not how much money you make, but how much money you keep. - Robert Kiyosaki",
    "The art is not in making money, but in keeping it. - Proverb",
    "Never spend your money before you have it. - Thomas Jefferson"
  ],
  food: [
    "One cannot think well, love well, sleep well, if one has not dined well. - Virginia Woolf",
    "Tell me what you eat, and I will tell you what you are. - Jean Anthelme Brillat-Savarin",
    "Food is our common ground, a universal experience. - James Beard",
    "Life is uncertain. Eat dessert first. - Ernestine Ulmer"
  ],
  study: [
    "The expert in anything was once a beginner. - Helen Hayes",
    "Study the past if you would define the future. - Confucius",
    "Learning is a treasure that will follow its owner everywhere. - Chinese Proverb",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert"
  ],
  life: [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "The purpose of our lives is to be happy. - Dalai Lama"
  ],
  default: [
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Strive not to be a success, but rather to be of value. - Albert Einstein"
  ]
}

export default function QuoteForm() {
  const [quotes, setQuotes] = useState<string[]>([])
  const [topic, setTopic] = useState("")
  const [currentTopic, setCurrentTopic] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const searchTopic = topic.toLowerCase().trim()
    setCurrentTopic(topic || "inspiration")
    
    const matchingQuotes = QUOTE_DATABASE[searchTopic as keyof typeof QUOTE_DATABASE] || 
      QUOTE_DATABASE.default
    
    setQuotes(matchingQuotes)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto space-y-8">
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Quote Generator
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
              Get inspired by quotes on any topic
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic" className="text-lg font-medium">
                  Quote Topic
                </Label>
                <Input
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. happiness, success, love, money"
                  className="text-base py-3 px-4 border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500">
                  Try: motivation, happiness, success, love, money, food, study
                </p>
              </div>
              <Button
                type="submit"
                className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md transition-all duration-200 transform hover:scale-[1.01]"
              >
                Get Inspiring Quotes
              </Button>
            </form>
          </CardContent>
        </Card>

        {quotes.length > 0 && (
          <Card className="shadow-lg border-0">
            <CardHeader>
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {currentTopic ? `Quotes about ${currentTopic}` : "Inspirational Quotes"}
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {quotes.map((quote, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
<p className="text-gray-700 text-lg">&ldquo;{quote}&rdquo;</p>                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}