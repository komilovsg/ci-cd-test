import { Button, Card, CardBody, CardHeader, Chip, Divider } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            CI/CD Test Project
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Modern Next.js 15 application with Hero UI for testing CI/CD pipelines
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Chip color="primary" variant="flat">Next.js 15</Chip>
            <Chip color="secondary" variant="flat">TypeScript</Chip>
            <Chip color="success" variant="flat">Hero UI</Chip>
            <Chip color="warning" variant="flat">Tailwind CSS</Chip>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-xl font-semibold">🚀 Fast Development</h3>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <p className="text-gray-600 dark:text-gray-300">
                Built with Next.js 15 and React 19 for optimal performance and developer experience.
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-xl font-semibold">🎨 Modern UI</h3>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful components powered by Hero UI with dark mode support.
              </p>
            </CardBody>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0 pt-6 px-6">
              <h3 className="text-xl font-semibold">⚡ CI/CD Ready</h3>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <p className="text-gray-600 dark:text-gray-300">
                Configured for automated testing, building, and deployment pipelines.
              </p>
            </CardBody>
          </Card>
        </div>

        <Divider className="my-8" />

        {/* Action Buttons */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Deploy?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              color="primary" 
              size="lg"
              className="font-semibold"
            >
              Deploy to Vercel
            </Button>
            <Button 
              color="secondary" 
              variant="bordered" 
              size="lg"
              className="font-semibold"
            >
              View Documentation
            </Button>
            <Button 
              color="success" 
              variant="flat" 
              size="lg"
              className="font-semibold"
            >
              Run Tests
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 dark:text-gray-400">
          <p>Built with ❤️ for CI/CD testing</p>
        </footer>
      </div>
    </div>
  );
}
