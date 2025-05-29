"use client"

import { useState } from "react"
import { Search, ChevronDown, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("home")
  const [selectedSoldier, setSelectedSoldier] = useState(null)
  const [selectedTest, setSelectedTest] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchFilter, setShowSearchFilter] = useState(false)
  const [showSortOptions, setShowSortOptions] = useState(false)
  const [sortBy, setSortBy] = useState("최신순")
  const [searchFilter, setSearchFilter] = useState({
    name: "",
    rank: "",
    dateFrom: "",
    dateTo: "",
  })

  const soldiers = [
    {
      id: 1,
      name: "선윤석",
      rank: "일등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 1, date: "2024-01-15", type: "정기 심리검사", result: "정상", score: 85, notes: "특이사항 없음" },
        {
          id: 2,
          date: "2024-03-20",
          type: "스트레스 검사",
          result: "경미한 스트레스",
          score: 72,
          notes: "업무 스트레스 관리 필요",
        },
      ],
    },
    {
      id: 2,
      name: "이산지",
      rank: "일등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 3, date: "2024-02-10", type: "정기 심리검사", result: "정상", score: 90, notes: "매우 양호한 상태" },
      ],
    },
    {
      id: 3,
      name: "김민수",
      rank: "상등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 4, date: "2024-01-25", type: "정기 심리검사", result: "정상", score: 88, notes: "안정적인 심리상태" },
      ],
    },
    {
      id: 4,
      name: "박준호",
      rank: "병장",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 5, date: "2024-03-05", type: "리더십 평가", result: "우수", score: 95, notes: "리더십 역량 뛰어남" },
      ],
    },
    {
      id: 5,
      name: "최영호",
      rank: "이등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [],
    },
    {
      id: 6,
      name: "정태현",
      rank: "일등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 6, date: "2024-02-28", type: "적응력 검사", result: "양호", score: 82, notes: "부대 적응 잘됨" },
      ],
    },
    {
      id: 7,
      name: "강동욱",
      rank: "상등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [],
    },
    {
      id: 8,
      name: "윤성민",
      rank: "병장",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [{ id: 7, date: "2024-01-10", type: "정기 심리검사", result: "정상", score: 87, notes: "안정적" }],
    },
    {
      id: 9,
      name: "임재혁",
      rank: "이등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [],
    },
    {
      id: 10,
      name: "조현우",
      rank: "일등병",
      affiliation: "12사단 포병연대 63포병대대 본부포대",
      testHistory: [
        { id: 8, date: "2024-03-15", type: "정기 심리검사", result: "정상", score: 79, notes: "정상 범위" },
      ],
    },
  ]

  const getBreadcrumb = () => {
    if (currentView === "home") return "홈"
    if (currentView === "soldier" && selectedSoldier) return `홈 > ${selectedSoldier.name}`
    if (currentView === "detail" && selectedSoldier) return `홈 > ${selectedSoldier.name} > 심리 검사 기록 상세 조회`
    return "홈"
  }

  const handleSearch = () => {
    // Search functionality would be implemented here
    console.log("Searching with:", searchQuery, searchFilter)
  }

  const handleSoldierClick = (soldier) => {
    setSelectedSoldier(soldier)
    setCurrentView("soldier")
  }

  const handleTestClick = (test) => {
    setSelectedTest(test)
    setCurrentView("detail")
  }

  const handleDesignate = (soldier) => {
    alert(`${soldier.name}을(를) 심리 검사 대상자로 지정했습니다.`)
  }

  const sortedSoldiers = [...soldiers].sort((a, b) => {
    switch (sortBy) {
      case "이름순":
        return a.name.localeCompare(b.name)
      case "계급순":
        const rankOrder = { 이등병: 1, 일등병: 2, 상등병: 3, 병장: 4 }
        return rankOrder[b.rank] - rankOrder[a.rank]
      default: // 최신순
        return b.id - a.id
    }
  })

  if (currentView === "detail" && selectedTest && selectedSoldier) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-semibold text-[#606060] mb-4">용사 심리 검사 기록 조회</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{getBreadcrumb()}</span>
        </div>

        <Button onClick={() => setCurrentView("soldier")} variant="outline" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          돌아가기
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {selectedSoldier.name} - 심리 검사 상세 결과
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">검사 날짜</label>
                <p className="text-lg">{selectedTest.date}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">검사 유형</label>
                <p className="text-lg">{selectedTest.type}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">검사 결과</label>
                <Badge variant={selectedTest.result === "정상" ? "default" : "secondary"}>{selectedTest.result}</Badge>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">점수</label>
                <p className="text-lg font-semibold">{selectedTest.score}/100</p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">상세 소견</label>
              <p className="mt-2 p-4 bg-gray-50 rounded-md">{selectedTest.notes}</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">권장 사항</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>정기적인 스트레스 관리 교육 참여</li>
                <li>동료와의 원활한 소통 유지</li>
                <li>충분한 휴식과 수면 확보</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentView === "soldier" && selectedSoldier) {
    return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-semibold text-[#606060] mb-4">용사 심리 검사 기록 조회</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>{getBreadcrumb()}</span>
        </div>

        <Button onClick={() => setCurrentView("home")} variant="outline" className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          목록으로 돌아가기
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {selectedSoldier.name} 심리 검사 이력
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-gray-600">이름</label>
                <p className="text-lg">{selectedSoldier.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">계급</label>
                <p className="text-lg">{selectedSoldier.rank}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">소속</label>
                <p className="text-lg">{selectedSoldier.affiliation}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>심리 검사 기록</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedSoldier.testHistory.length === 0 ? (
              <p className="text-gray-500 text-center py-8">심리 검사 기록이 없습니다.</p>
            ) : (
              <div className="space-y-4">
                {selectedSoldier.testHistory.map((test) => (
                  <div
                    key={test.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleTestClick(test)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{test.type}</h3>
                        <p className="text-sm text-gray-600">{test.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={test.result === "정상" ? "default" : "secondary"}>{test.result}</Badge>
                        <p className="text-sm text-gray-600 mt-1">점수: {test.score}/100</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold text-[#606060] mb-4">용사 심리 검사 기록 조회</h1>

      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>{getBreadcrumb()}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="검색어 입력"
            className="pl-3 pr-10 py-2 border rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchFilter(true)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>

          {showSearchFilter && (
            <Card className="absolute top-full left-0 right-0 mt-2 z-10">
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">상세 검색</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">이름</label>
                    <Input
                      placeholder="이름 입력"
                      value={searchFilter.name}
                      onChange={(e) => setSearchFilter({ ...searchFilter, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">계급</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={searchFilter.rank}
                      onChange={(e) => setSearchFilter({ ...searchFilter, rank: e.target.value })}
                    >
                      <option value="">전체</option>
                      <option value="이등병">이등병</option>
                      <option value="일등병">일등병</option>
                      <option value="상등병">상등병</option>
                      <option value="병장">병장</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">검사 시작일</label>
                    <Input
                      type="date"
                      value={searchFilter.dateFrom}
                      onChange={(e) => setSearchFilter({ ...searchFilter, dateFrom: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">검사 종료일</label>
                    <Input
                      type="date"
                      value={searchFilter.dateTo}
                      onChange={(e) => setSearchFilter({ ...searchFilter, dateTo: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleSearch} size="sm">
                    검색
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setShowSearchFilter(false)}>
                    닫기
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8" onClick={handleSearch}>
          조회
        </Button>

        <div className="relative">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-gray-200 text-gray-700"
            onClick={() => setShowSortOptions(!showSortOptions)}
          >
            {sortBy}
            <ChevronDown className="h-4 w-4" />
          </Button>

          {showSortOptions && (
            <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
              {["최신순", "이름순", "계급순"].map((option) => (
                <button
                  key={option}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setSortBy(option)
                    setShowSortOptions(false)
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto max-h-96 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white">
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">순번</th>
              <th className="border px-4 py-2 text-left">이름</th>
              <th className="border px-4 py-2 text-left">계급</th>
              <th className="border px-4 py-2 text-left">소속</th>
              <th className="border px-4 py-2 text-left">심리 검사 기록</th>
              <th className="border px-4 py-2 text-left">심리 검사 대상자로 지정</th>
            </tr>
          </thead>
          <tbody>
            {sortedSoldiers.map((soldier, index) => (
              <tr
                key={soldier.id}
                className={`${index % 2 === 1 ? "bg-gray-100" : ""} hover:bg-blue-50 cursor-pointer`}
                onClick={() => handleSoldierClick(soldier)}
              >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{soldier.name}</td>
                <td className="border px-4 py-2">{soldier.rank}</td>
                <td className="border px-4 py-2">{soldier.affiliation}</td>
                <td className="border px-4 py-2">
                  <span className="text-[#898989] cursor-pointer hover:text-blue-600">심리 검사 기록 상세 조회</span>
                </td>
                <td className="border px-4 py-2">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDesignate(soldier)
                    }}
                  >
                    지정하기
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
