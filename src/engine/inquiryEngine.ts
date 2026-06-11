import {
    inquiryTree,
  } from "@/content/reflections/inquiryTree";
  
  export function getInquiryPath(
    emotion: keyof typeof inquiryTree
  ) {
    return inquiryTree[emotion];
  }