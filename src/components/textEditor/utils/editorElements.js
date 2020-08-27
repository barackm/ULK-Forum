import React from "react";
import { AiOutlineOrderedList, AiOutlineFontColors } from "react-icons/ai";
import { FiItalic } from "react-icons/fi";
import { BsCodeSlash, BsTypeBold } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { FaQuoteLeft, FaRegEdit } from "react-icons/fa";

export const INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <BsTypeBold /> },
  { label: "Italic", style: "ITALIC", icon: <FiItalic /> },
  { label: "Underline", style: "UNDERLINE", icon: <AiOutlineFontColors /> },
  { label: "Monospace", style: "CODE", icon: <FaRegEdit /> },
];
export const BLOCK_TYPES = [
  { label: "Blockquote", style: "blockquote", icon: <FaQuoteLeft /> },
  { label: "UL", style: "unordered-list-item", icon: <MdFormatListBulleted /> },
  { label: "OL", style: "ordered-list-item", icon: <AiOutlineOrderedList /> },
  { label: "Code Block", style: "code-block", icon: <BsCodeSlash /> },
];
