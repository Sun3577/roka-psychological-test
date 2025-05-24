"use client"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요! 저는 또상이입니다. 오늘 심리검사를 도와드리겠습니다. 먼저 자기소개를 해주시겠어요?",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "안녕하세요! 저는 김철수입니다. 잘 부탁드립니다.",
      isUser: true,
      timestamp: new Date(),
    },
    {
      id: 3,
      text: "반갑습니다 김철수님! 오늘 기분은 어떠신가요? 최근에 어떤 일들이 있었는지 편하게 말씀해 주세요.",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 4,
      text: "요즘 군생활이 조금 힘들어서 스트레스를 많이 받고 있어요. 그래도 동기들과 잘 지내고 있습니다.",
      isUser: true,
      timestamp: new Date(),
    },
  ])
  
  const [chatStartTime, setChatStartTime] = useState(new Date())
  const [showEndButton, setShowEndButton] = useState(false)

  const [inputValue, setInputValue] = useState("")
  const [inputHeight, setInputHeight] = useState(80)
  const textareaRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Calculate padding based on text length
  const calculatePadding = (text) => {
    const lines = text.split("\n").length
    const estimatedLines = Math.ceil(text.length / 50) // Rough estimate
    const totalLines = Math.max(lines, estimatedLines)

    const xPadding = Math.min(Math.max(totalLines * 5, 16), 24)
    const yPadding = Math.min(Math.max(totalLines * 7, 12), 32)

    return { x: xPadding, y: yPadding }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      const scrollHeight = textareaRef.current.scrollHeight
      const newHeight = Math.max(80, Math.min(scrollHeight + 40, 200))
      setInputHeight(newHeight)
      textareaRef.current.style.height = `${scrollHeight}px`
    }
  }, [inputValue])

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])
  
  
  // Show end button after 5 minutes
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowEndButton(true)
      },
      5 * 60 * 1000,
    ) // 5 minutes in milliseconds

    return () => clearTimeout(timer)
  }, [])

  const handleEndInspection = () => {
    // Handle ending the inspection
    alert("검사를 종료합니다.")
    // You can add navigation logic here
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue.trim(),
        isUser: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newMessage])
      setInputValue("")
      setInputHeight(80)

      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponses = [
          "그렇군요. 군생활에서 스트레스를 받는 것은 자연스러운 일입니다. 어떤 부분이 가장 힘드신가요?",
          "동기들과 좋은 관계를 유지하고 계시는군요. 그것은 정말 중요한 일입니다. 더 자세히 말씀해 주시겠어요?",
          "이해합니다. 그런 상황에서 어떻게 스트레스를 해소하고 계신가요?",
          "좋은 말씀이네요. 그런 경험들이 앞으로 어떤 도움이 될 것 같으신가요?",
        ]

        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

        const aiMessage = {
          id: messages.length + 2,
          text: randomResponse,
          isUser: false,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiMessage])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* End Inspection Button - appears after 5 minutes */}
      {showEndButton && (
        <button
          onClick={handleEndInspection}
          className="fixed top-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg z-10 transition-colors"
        >
          <span className="text-sm font-medium">검사 종료하기</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      {/* Chat Messages Section */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6"
        style={{
          height: `calc(100vh - ${inputHeight}px)`,
          boxShadow: "inset 0 10px 10px -10px rgba(0,0,0,0.1), inset 0 -10px 10px -10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Initial message */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500">또상이와의 대화를 시작했습니다.</p>
        </div>

        {/* Messages */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => {
            const padding = calculatePadding(message.text)

            if (message.isUser) {
              return (
                <div key={message.id} className="flex justify-end">
                  <div
                    className="bg-[#a0c878] text-white max-w-md"
                    style={{
                      borderRadius: "35px 35px 35px 35px",
                      borderTopRightRadius: "8px",
                      padding: `${padding.y}px ${padding.x}px`,
                    }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={message.id} className="flex items-start space-x-3">
                  <img
                    src="/ttosangyi.png"
                    alt="또상이"
                    className="w-12 h-12 rounded-full flex-shrink-0"
                    style={{ borderRadius: "35px" }}
                  />
                  <div
                    className="bg-gray-200 text-gray-800 max-w-md"
                    style={{
                      borderRadius: "35px 35px 35px 35px",
                      borderTopLeftRadius: "8px",
                      padding: `${padding.y}px ${padding.x}px`,
                    }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

      {/* Input Section */}
      <div
        className="bg-white border-t border-gray-200 px-10 py-4 flex items-center space-x-3"
        style={{ height: `${inputHeight}px` }}
      >
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="또상이에게 하고 싶은 말을 입력하세요."
            className="w-full resize-none border border-gray-300 rounded-full px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              minHeight: "48px",
              maxHeight: "120px",
            }}
          />
        </div>
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
