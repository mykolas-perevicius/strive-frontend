/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/qNRbUtt5RLZ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function MinicutDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xlg">Mini-Cut Calculator</CardTitle>
        <p className="text-sm leading-none font-normal text-gray-500 dark:text-gray-400">
          Estimate the duration of your mini-cut.
        </p>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <Label htmlFor="current-weight">Current Weight (kg)</Label>
            <Input id="current-weight" placeholder="70" type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="target-weight">Target Weight (kg)</Label>
            <Input id="target-weight" placeholder="68" type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate">Rate of Weight Loss (kg/week)</Label>
            <Input id="rate" placeholder="0.5" step="0.1" type="number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weeks">Estimated Duration (weeks)</Label>
            <Input disabled id="weeks" type="number" value="4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
