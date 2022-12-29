import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv1Cb() {
	const onClick = useCallback(callbackFactory("Div1", "trial", "/trial", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex2Cb() {
	const onClick = useCallback(callbackFactory("Flex2", "trial", "/trial", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex204Cb() {
	const onClick = useCallback(callbackFactory("Flex204", "trial", "/trial", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex205Cb() {
	const onClick = useCallback(callbackFactory("Flex205", "trial", "/trial", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox122Cb() {
	const onClick = useCallback(callbackFactory("TextBox122", "trial", "/trial", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCarousel7Cb() {

	return {  }
}