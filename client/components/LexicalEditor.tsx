"use client";

import { SetStateAction, useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { EditorState, $getRoot, $createParagraphNode, $createTextNode } from "lexical";
import ToolbarPlugin from "./Toolbar";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useAppSelector } from "@/redux/store";
import { useUpdateTodoMutation } from "@/redux/api/todo.api";
import toast from "react-hot-toast";



function ContentUpdater({ content }: { content: string }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      const root = $getRoot();
      root.clear(); // Clear existing content
      const paragraph = $createParagraphNode();
      paragraph.append($createTextNode(content));
      root.append(paragraph);
    });
  }, [content, editor]); // Update when `content` changes

  return null;
}

export default function LexicalEditor({ content = "" }: { content?: string }) {
  const [editorState, setEditorState] = useState<EditorState | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  
  const todo = useAppSelector((state) => state.todo.selectedTodo);
  const [updateTodo, {isLoading : isUpdating}] = useUpdateTodoMutation();
  
  const handleSave = async () => {
    if (!editorState) return;
    
    editorState.read( async () => {
      try {
        const content = $getRoot().getTextContent();
       await updateTodo({
          ...todo,
          description: content,
        });
        toast.success("Todo updated successfully");
      } catch (error: any) {
        console.log("@@Update todo error",error)
        if('data' in error && error.data){
          toast.error(error.data.message || "An error occured please try again!!");
      }
      else{
        toast.error("An error occured please try again!!");
      }
    }
    });
  };

  return (
    <LexicalComposer
      initialConfig={{
        namespace: "MyEditor",
        theme: { paragraph: "mb-2 text-gray-800" },
        onError(error: Error) {
          console.error(error);
        },
      }}
    >
      <div className="border rounded-lg shadow-sm bg-white">
        <div className="flex items-center text-slate-600">
          <ToolbarPlugin />
        </div>
        <div className="p-3">
          <RichTextPlugin
            ErrorBoundary={LexicalErrorBoundary}
            contentEditable={
              <ContentEditable className="outline-none p-2 min-h-[100px]" />
            }
            placeholder={<div className="text-gray-400">Start typing...</div>}
          />
        </div>
        <OnChangePlugin
          onChange={(newState) => {
            setEditorState(newState);
            setHasChanges(true);
          }}
        />
        <HistoryPlugin />
        <ContentUpdater content={content} />

        {/* Save Button (Only visible if changes detected) */}
        {hasChanges && (
          <div className="p-3 flex justify-end">
            <button
              onClick={handleSave}
              disabled={isUpdating}
              className="px-4 py-2 bg-accent-500/90 text-white rounded-lg hover:bg-accent-500 disabled:opacity-50"
            >
              {isUpdating ? "Saving..." : "Save"}
            </button>
          </div>
        )}
      </div>
    </LexicalComposer>
  );
}
