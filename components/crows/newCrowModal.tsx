"use client";

import { useState } from "react";
import { Modal } from "../ui/Modal";
import { Input } from "../ui/input";

export const NewCrowModal = ({
  post,
}:{
  post: (title: string) => void
}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(inputText);
  };
    return (
        <>
          <Modal title="New Crow">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
              <Input placeholder="name your issue" value={inputText} onChange={(e)=>setInputText(e.currentTarget.value)} />
              <span className="sr-only">name your issue</span>
              </form>
            </div>
          </Modal>
        </>
    )
}
