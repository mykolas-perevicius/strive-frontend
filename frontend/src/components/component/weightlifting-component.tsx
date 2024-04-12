/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/NP5Bp1f3vfv
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
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ClassAttributes, HTMLAttributes, SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export function WeightliftingComponent() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" to="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link className="font-bold" to="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" to="#">
            Workouts
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" to="#">
            Exercises
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" to="#">
            Progress
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search workouts..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="grid min-h-[calc(100vh_-_theme(spacing.16))] grid-rows-auto-1 gap-4 p-4 md:gap-8 md:p-10">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
          <div className="ml-auto flex items-center gap-2">
            <Button className="hidden sm:flex" variant="outline">
              Today
            </Button>
            <Button className="hidden md:flex" variant="outline">
              This Month
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-[280px] justify-start text-left font-normal" id="date" variant="outline">
                  <CalendarClockIcon className="mr-2 h-4 w-4" />
                  June 01, 2023 - June 30, 2023
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-0">
                <Calendar initialFocus mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Card className="flex flex-col p-6">
          <CardHeader>
            <CardTitle>Total Weight Lifted</CardTitle>
            <CardDescription>5000 kg</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>Deadlift</CardTitle>
                <CardDescription>1200 kg</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={24} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>Bench Press</CardTitle>
                <CardDescription>1000 kg</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={20} />
              </CardContent>
            </Card>
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>Squats</CardTitle>
                <CardDescription>2800 kg</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={56} />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="flex flex-col p-6">
          <CardHeader>
            <CardTitle>Personal Records</CardTitle>
            <CardDescription>View your personal bests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exercise</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Reps</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Bench Press</TableCell>
                  <TableCell>100 kg</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>2023-06-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Deadlift</TableCell>
                  <TableCell>150 kg</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>2023-06-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Squats</TableCell>
                  <TableCell>120 kg</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2023-06-01</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="flex flex-col p-6">
            <CardHeader>
              <CardTitle>Average Weight</CardTitle>
              <CardDescription>Per session</CardDescription>
            </CardHeader>
            <CardContent>
              <CurvedlineChart className="w-full aspect-[2/1]" />
            </CardContent>
          </Card>
          <Card className="flex flex-col p-6">
            <CardHeader>
              <CardTitle>Workout Frequency</CardTitle>
              <CardDescription>Over the last month</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="w-full aspect-[2/1]" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function CalendarClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.25V14" />
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </svg>
  )
}


function CurvedlineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
