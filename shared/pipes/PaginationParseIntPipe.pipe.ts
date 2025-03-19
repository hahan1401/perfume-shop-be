import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Pagination } from '@shared/common/Pagination';
import { isNil } from 'lodash';

@Injectable()
export class PaginationParseIntPipe implements PipeTransform {
  transform(value: {
    pageIndex: string;
    pageSize: string;
  }): Partial<Pagination> | undefined {
    const { pageIndex, pageSize } = value;

    if (!pageSize) return { pageIndex: undefined, pageSize: undefined };

    if ((!isNil(pageIndex) && /\D/.test(pageIndex)) || /\D/.test(pageSize)) {
      throw new BadRequestException(
        'Validation failed (numeric string is expected)',
      );
    }

    const _pageIndex = !isNil(pageIndex) ? parseInt(pageIndex) : undefined;
    const _pageSize = parseInt(pageSize);

    if ((!isNil(pageIndex) && isNaN(_pageIndex as number)) || isNaN(_pageSize)) {
      throw new BadRequestException(
        'Validation failed (numeric string is expected)',
      );
    }
    return { pageIndex: _pageIndex, pageSize: _pageSize };
  }
}
