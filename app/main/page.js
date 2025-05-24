import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* User Profile Icon */}
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
        {/* Character Image */}
        <div className="mb-12">
          <img src="/ttosangyi.png" alt="또상이 캐릭터" className="w-48 h-48 object-contain" />
        </div>

        {/* Information Text */}
        <div className="max-w-4xl space-y-6 mb-12">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-lg text-gray-800 leading-relaxed">
              검사는 <span className="font-semibold">AI와 대화 형식</span>으로 진행되며, 대화를{" "}
              <span className="text-red-600 font-semibold">최소 5분 이상</span> 진행해야 검사를 완료할 수 있습니다.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-lg text-gray-800 leading-relaxed">
              또상이가 하는 질문에 대한 본인의 생각이나 또상이에게 하고 싶은 말을 {" "}
              <span className="font-semibold">글로 입력</span>하면 됩니다.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
            <p className="text-lg text-gray-800 leading-relaxed">
              내용을 입력할 때에는 오래 고민할 필요 없이{" "}
              <span className="text-red-600 font-semibold">생각이 드는 대로 자유롭게</span> 작성해야 정확한 검사 결과가
              나옵니다.
            </p>
          </div>
        </div>

        {/* Start Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-100 h-15 px-10 py-4 text-lg font-medium rounded-2xl flex items-center space-x-2">
          <span className="font-semibold">검사 시작하기</span>
          <ArrowRight className="w-7 h-7" />
        </Button>
      </div>
    </div>
  )
}
