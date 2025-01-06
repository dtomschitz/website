'use client';

import Card, {CardTitle, CardHeader, CardContent} from '@/components/ui/card';

const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}I am a software engineer with a passion for building scalable and
          efficient web applications.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
