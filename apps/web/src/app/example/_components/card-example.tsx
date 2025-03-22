import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

import {
  Card,
  CardBadge,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn-ui/card';
import { Separator } from '@/components/shadcn-ui/separator';
import Icon from '@/components/ui/icon';

const CardExample = () => {
  return (
    <Card>
      <CardHeader className="gap-1.5">
        <div className="flex items-center justify-between">
          <CardTitle>Programming Lecturer</CardTitle>
          <span>Rp 4-6M</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <CardBadge>Remote</CardBadge>
          <CardBadge>1-3 years of experience</CardBadge>
          <CardBadge>Minimum Bachelor’s Degree</CardBadge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex w-fit items-center justify-center gap-2.5">
          <Image
            src="/purwadhika.jpeg"
            alt="Company logo"
            width={100}
            height={100}
            className="aspect-square w-8 rounded-full"
          />
          <div className="flex flex-col">
            <Link
              href="#"
              aria-label="Company detail"
              className="text-primary-blue text-sm"
            >
              Purwadhika Digital Technology School
            </Link>
            <p className="text-sm">Tangerang, Banten</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Separator />
        <div className="flex w-full items-center justify-between gap-4">
          <span className="text-primary-gray text-sm">2 days ago</span>
          <Icon
            icon={faBookmark}
            className="text-primary-dark h-4 w-4 cursor-pointer"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardExample;
