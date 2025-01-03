'use client'

import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}




const CommentSection = ( ) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newContentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newContentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="font-mono text-2xl font-semibold">COMMENTS</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  className="font-mono mt-2 hover:bg-gray-400 hover:text-white text-yellow-500 bg-gray-600"
                  onClick={() => handleEditComment(comment.id)}
                >
                  EDIT
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="font-mono text-gray-400">NO Comment Yet!</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          placeholder="YOUR NAME"
          className="w-full border-yellow-300 font-mono mb-2"
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <Input
          placeholder="ADD YOUR COMMENT"
          className="w-full border-yellow-300 font-mono mb-2"
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="mt-4 bg-amber-500 hover:bg-yellow-500 hover:text-white"
        >
          {editingCommentId ? 'Save!' : 'Submit!'}
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
