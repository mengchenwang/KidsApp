import React, {forwardRef, ComponentPropsWithoutRef} from 'react';
import {Icon, IconProps} from '@ui-kitten/components';

type props = ComponentPropsWithoutRef<IconProps>;

export const TickIcon = forwardRef<Icon<any>, props>((props, ref) => (
  <Icon {...props} ref={ref} name="checkmark-circle-outline" />
));

export const GiftIcon = forwardRef<Icon<any>, props>((props, ref) => (
  <Icon {...props} ref={ref} name="gift-outline" />
));

export const CardIcon = forwardRef<Icon<any>, props>((props, ref) => (
  <Icon {...props} ref={ref} name="credit-card-outline" />
));

export const StarIcon = forwardRef<Icon<any>, props>((props, ref) => (
  <Icon {...props} ref={ref} name="star" />
));
