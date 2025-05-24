import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen flex">
      {/* Background Image Section */}
      <div className="flex-1 relative">
        <img src="army.webp" alt="Interior background" className="w-full h-full object-cover" />
      </div>

      {/* Login Form Section */}
      <div className="w-[480px] bg-white flex flex-col">
        <div className="flex-1 flex items-center justify-center px-12">
          <div className="w-full max-w-sm space-y-8">
            {/* Logo/Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-12">또상이</h1>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  군번 (- 포함)
                </Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="XX-XXXXXXXX"
                  className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  비밀번호 (최초 로그인 시 군번과 동일)
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base">
                로그인
              </Button>

              <div className="text-center">
                <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                  비밀번호를 잊어버렸나요?
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-12 py-6 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex space-x-4">
              <Link href="/cookies" className="hover:text-gray-700">
                Cookies
              </Link>
              <Link href="/legal" className="hover:text-gray-700">
                Legal policy
              </Link>
            </div>
            <div className="flex space-x-4">
              <span>Made with love in nowhere</span>
              <span>Copyright 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
