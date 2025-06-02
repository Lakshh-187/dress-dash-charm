
import React, { useState } from 'react';
import { MessageCircle, User, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CommentsSectionProps {
  productId: number;
}

export const CommentsSection = ({ productId }: CommentsSectionProps) => {
  const [newComment, setNewComment] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);

  const comments = [
    {
      id: 1,
      user: "Riya P.",
      question: "Does this dress run true to size? I'm usually a medium but wondering if I should size up?",
      time: "2 hours ago",
      answers: [
        {
          id: 1,
          user: "Meera K.",
          answer: "I'm usually M too and it fits perfectly! The fabric has a nice stretch to it.",
          time: "1 hour ago",
          helpful: 5
        }
      ]
    },
    {
      id: 2,
      user: "Kavya S.",
      question: "How's the length? I'm 5'4\" and want to make sure it's not too long.",
      time: "1 day ago",
      answers: [
        {
          id: 1,
          user: "Divya R.",
          answer: "I'm 5'3\" and it hits just below my knees - perfect midi length! You should be good ✨",
          time: "22 hours ago",
          helpful: 3
        },
        {
          id: 2,
          user: "Aditi M.",
          answer: "Same height as you and it looks great! Not too long at all.",
          time: "20 hours ago",
          helpful: 2
        }
      ]
    }
  ];

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Handle comment submission
      setNewComment('');
    }
  };

  return (
    <Card className="mb-8 border-0 shadow-lg bg-white/70">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Questions & Answers
          </h2>
          <MessageCircle className="h-6 w-6 text-purple-600" />
        </div>

        {/* Ask a Question */}
        <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
          <h3 className="font-semibold mb-3">Have a question about this dress?</h3>
          <div className="flex space-x-2">
            <Input 
              placeholder="Ask about fit, fabric, styling, delivery..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSubmitComment}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Ask
            </Button>
          </div>
        </div>

        {/* Comments */}
        <div className="space-y-6">
          {displayedComments.map((comment) => (
            <div key={comment.id} className="space-y-4">
              {/* Question */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-purple-600">Q:</span>
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700">{comment.question}</p>
                </div>
              </div>

              {/* Answers */}
              {comment.answers.map((answer) => (
                <div key={answer.id} className="ml-6 flex items-start space-x-3 bg-green-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-green-600">A:</span>
                      <span className="font-medium">{answer.user}</span>
                      <span className="text-sm text-gray-500">{answer.time}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{answer.answer}</p>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600 p-0 h-auto">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Helpful ({answer.helpful})
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {comments.length > 1 && (
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="rounded-full border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => setShowAllComments(!showAllComments)}
            >
              {showAllComments ? 'Show Less' : 'Show All Questions'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
