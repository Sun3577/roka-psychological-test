import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PasswordChange() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      {/* Background Image with Opacity */}
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url(/army.webp)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">비밀번호 변경</h1>
          <div className="text-sm text-gray-600 space-y-1">
            <p>최초 비밀번호가 군번으로 되어 있기 때문에 비밀번호를 변경해야 합니다.</p>
            <p>본인이 기억할 수 있는 비밀번호로 설정해주시기 바랍니다.</p>
          </div>
        </div>

        {/* Password Change Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-sm font-medium text-gray-700">
              현재 비밀번호
            </Label>
            <Input
              id="current-password"
              type="text"
              placeholder="XX-XXXXXXXX"
              className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-sm font-medium text-gray-700">
              새로운 비밀번호
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="••••••••••••"
              className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
              새로운 비밀번호 확인
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••••••"
              className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base">
            비밀번호 바꾸기
          </Button>
        </div>
      </div>
    </div>
  )
}
